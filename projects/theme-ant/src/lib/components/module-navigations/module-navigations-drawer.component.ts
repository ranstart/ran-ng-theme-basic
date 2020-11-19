import { Config, ConfigState } from '@abp/ng.core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { ModuleNavigation, NavgationService, RanThemeLibraryNavigationState } from '@ran-ng/theme-library';
import { NzDrawerRef } from 'ng-zorro-antd';
import { Observable } from 'rxjs';

@Component({
    selector: 'ran-theme-ant-module-navigations-drawer',
    templateUrl: './module-navigations-drawer.component.html',
    styleUrls: ['./module-navigations-drawer.component.less']
})
export class ModuleNavigationsDrawerComponent {

    @Select(RanThemeLibraryNavigationState.getModuleNavigationState)
    navigations$: Observable<ModuleNavigation[]>;

    get apiUrl() {
        return this.store.selectSnapshot(ConfigState.getApiUrl());
    }

    get appInfo(): Config.Application {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }

    constructor(
        private store: Store,
        private router: Router,
        private appNavigationService: NavgationService,
        private drawerRef: NzDrawerRef
    ) {
    }

    navigationByRoute(route: ModuleNavigation) {
        const url = this.appNavigationService.getNavigationUrlByModule(route);
        this.router.navigateByUrl(url);
        this.close();
    }

    close() {
        this.drawerRef.close();
    }
}
