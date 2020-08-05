import { ABP, Config, ConfigState } from '@abp/ng.core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NzDrawerRef } from 'ng-zorro-antd';
import { RanThemeLibraryNavigationState, NavgationService, FirstClassNavigation } from '@ran-ng/theme-library';

@Component({
    selector: 'ran-one-theme-ant-navigations-drawer',
    templateUrl: './navigations-drawer.component.html',
    styleUrls: ['./navigations-drawer.component.less']
})
export class NavigationsDrawerComponent {

    @Select(RanThemeLibraryNavigationState.getFirstClassNavigationState)
    navigations$: Observable<FirstClassNavigation[]>;

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

    navigationByRoute(route: ABP.FullRoute) {
        const url = this.appNavigationService.getNavigationUrlByRoute(route);
        debugger
        this.router.navigateByUrl(url);
        this.close();
    }

    close() {
        this.drawerRef.close();
    }
}
