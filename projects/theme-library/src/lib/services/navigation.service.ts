import { ABP, ConfigState } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetModuleNavigationState, SetNavigationState, SetThreeClassNavigationState, SetTwoClassNavigationState } from '../actions/navigation.action';
import { Abpone } from '../models/abpone';
import { ModuleNavigation } from '../models/navigation';
import { RanThemeLibraryNavigationState } from '../states/navigation.state';
import { ApplicationConfigrationService } from './application.service';

/**
 * ran-theme-library模块划分导航service
 * service将ABP的导航重新规整，共划分为三级导航，通过子导航是否有parentName用于划分第二级：
 * 1.单一顶部导航型
 * ====适用于功能模块少，但模块下功能比较复杂的类型
 * ====twoClassNavigations
 * 2.单一左侧导航型
 * ====适用于功能模块多，系统功能较简单的类型
 * ====threeClassNavigations
 * 3.全能型顶部左侧导航型
 * ====适用于:适用于功能模块多，系统功能多的类型
 * ====twoClassNavigations，threeClassNavigations
 */
@Injectable()
export class NavgationService {

    constructor(
        private store: Store,
        private router: Router,
        private applicationConfigrationService: ApplicationConfigrationService
    ) {
    }

    getNavigationUrlByModule(route: ABP.FullRoute): string {
        const routes = this.getChildRoutes(route.children, []);
        for (const _route of routes) {
            /**
             *  去掉判断是否隐藏，如果是隐藏一样可以进行跳转 && !_route.invisible
             */
            if (this.getGrantedPolicy(_route.requiredPolicy) && _route.url) {
                return _route.url;
            }
        }
        return route.url || route.path || '';
    }

    getNavigationActiveByModule(url: string, route: ABP.FullRoute) {
        if (url.startsWith(route.url)) {
            return true;
        } else {
            if (route.children && route.children.length) {
                for (const item of route.children) {
                    if (this.getNavigationActiveByModule(url, item)) {
                        return true;
                    }
                }
            } else {
                return false;
            }
        }
    }


    /**
     * 保存系统所有的导航
     */
    setNavigations() {
        const { routes } = this.store.selectSnapshot(ConfigState.getAll);
        const _routes = this.getRoutes(routes, []);
        this.store.dispatch(new SetNavigationState(_routes));
    }

    /**
     * 设置模块导航，默认为路由第一级
     */
    setModuleNavigations() {
        const { routes } = this.store.selectSnapshot(ConfigState.getAll);
        // 没做权限限制
        // const _routes = this.getRoutesByGranted(routes);
        this.applicationConfigrationService.getApplicationConfigration().subscribe(result => {
            const navigations = this.getModuleNavigations(routes, result.tenant.apps);
            this.store.dispatch(new SetModuleNavigationState(navigations));
        });
    }


    /**
     * 监听路由变更事件
     * @param event angular路由事件
     */
    setNavigationsByRouteEvent(event: NavigationEnd) {
        let url = event.url;

        if (url === '/') {
            url = event.urlAfterRedirects;
        }

        const segmentGroup = this.router.parseUrl(url).root.children.primary;
        const navigations = this.store.selectSnapshot(RanThemeLibraryNavigationState.getNavigationState);
        const segments = segmentGroup ? segmentGroup.segments : [];

        if (!segments.length) {
            this.setTwoAndThreeNavigations([]);
            return;
        }

        // 查找一级菜单中匹配的项
        const route = navigations.find(m => m.path === segments[0].path);
        // 如果不可见
        if (route && route.invisible) {
            this.setTwoAndThreeNavigations([]);
            return false;
        }

        if (route && route.parentName) {
            const __routes = navigations.filter(m => m.parentName === route.parentName);
            this.setThreeNavigations(__routes);
            this.setTwoNavigations([]);
        } else {
            this.setTwoAndThreeNavigations(route.children || []);
        }
    }

    /**
     * 设置topbar或者sidebar
     * @param routes appbar中当前选中的路由
     */
    setTwoAndThreeNavigations(routes: ABP.FullRoute[]) {

        const includes = routes.some(m => m.parentName);
        // 是否包含parentName,如果包含，则设置
        if (includes) {
            this.setTwoNavigations(routes);
            const route = routes.find(m => window.location.pathname.includes(m.path));
            if (route && this.getRouteGranted(route)) {
                this.setThreeNavigations(route.children);
                return;
            }

            for (const _route of routes) {
                if (this.getRouteGranted(route)) {
                    this.setThreeNavigations(route.children);
                    return;
                }
            }
        } else {
            this.setTwoNavigations([]);
            this.setThreeNavigations(routes);
        }
    }

    /**
     * 设置app顶部导航，默认为选中第一级路由的子集
     */
    setTwoNavigations(routes: ABP.FullRoute[]) {
        if (routes && routes.length === 1) {
            routes = [];
        }
        this.store.dispatch(new SetTwoClassNavigationState(routes));
    }

    /**
     * 设置app左侧导航，默认为选中的第二级的子集，也就是选中第一级的孙子
     */
    setThreeNavigations(routes: ABP.FullRoute[]) {
        this.store.dispatch(new SetThreeClassNavigationState(routes));
    }

    private getModuleNavigations(routes: ABP.FullRoute[], apps: Abpone.ApplicationConfigrationTenantApp[]): ModuleNavigation[] {
        const navigations: ModuleNavigation[] = [];
        for (const app of apps) {

            // 如果url有值，则为外部链接
            if (app.appUrl) {
                navigations.push({ ...app, ...{ name: app.appName, path: app.appUrl }, ...{ isExternalLink: true } });
            } else {
                // 查找route，如果有则说明是内部路由
                const route = routes.find(m => m.name === app.appRouteName);
                // 如果查询到
                if (route) {
                    navigations.push({ ...app, ...route });
                } else {
                    console.error(`app<${app.appName}>服务器端配置信息有误，请检查<appRouteName>或<appUrl>信息是否填写正确`, JSON.stringify(app));
                }
            }
        }
        return navigations;
    }

    private getRoutesByGranted(routes: ABP.FullRoute[]): ABP.FullRoute[] {
        const _routers = [];
        for (const item of routes) {
            if (this.getRouteGranted(item)) {
                _routers.push(item);
            }
        }
        return _routers;
    }

    /**
     * 判断路由是否授权
     * @param item item
     */
    private getRouteGranted(item: ABP.FullRoute): boolean {

        if (item.invisible) {
            return false;
        }

        /**
         * 如果没有权限，且无子集
         * 如果有权限，且无子集
         */
        if (
            (!item.requiredPolicy || item.requiredPolicy && this.getGrantedPolicy(item.requiredPolicy) && item.path) &&
            (item.children === undefined || !item.children.length)
        ) {
            return true;
        }

        const routes = this.getChildRoutes(item.children, []);
        for (const route of routes) {
            if (route.requiredPolicy) {
                if (this.getGrantedPolicy(route.requiredPolicy)) {
                    return true;
                }
            } else {
                return true;
            }
        }

        return false;
    }

    private getRoutes(routes: ABP.FullRoute[], newRoutes: ABP.FullRoute[] = []) {
        if (routes && routes.length) {
            for (const route of routes) {
                newRoutes.push(route);
                if (route.children && route.children.length) {
                    this.getRoutes(route.children, newRoutes);
                }
            }
        }
        return newRoutes;
    }

    /**
     * 获取最下级路由
     * @param routes 根据路由子数据取最小级数据
     * @param newRoutes 处理以后的数据存储对象
     */
    private getChildRoutes(routes: ABP.FullRoute[], newRoutes: ABP.FullRoute[]) {
        if (routes && routes.length) {
            for (const route of routes) {
                if (route.children && route.children.length) {
                    this.getChildRoutes(route.children, newRoutes);
                } else {
                    newRoutes.push(route);
                }
            }
        }
        return newRoutes;
    }

    private getGrantedPolicy(requiredPolicy: string): boolean {
        return this.store.selectSnapshot(ConfigState.getGrantedPolicy(requiredPolicy));
    }
}
