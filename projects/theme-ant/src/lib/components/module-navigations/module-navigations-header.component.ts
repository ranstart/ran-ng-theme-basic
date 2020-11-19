import { Config, ConfigState } from '@abp/ng.core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { ModuleNavigation, NavgationService, RanThemeLibraryNavigationState } from '@ran-ng/theme-library';
import { Observable } from 'rxjs';

@Component({
    selector: 'ran-theme-ant-module-navigations-header',
    templateUrl: './module-navigations-header.component.html'
})
export class ModuleNavigationsHeaderComponent {
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
    ) {
    }

    navigationByRoute(route: ModuleNavigation) {
        const url = this.appNavigationService.getNavigationUrlByModule(route);
        this.router.navigateByUrl(url);
    }

    getActive(route: ModuleNavigation) {
        return this.appNavigationService.getNavigationActiveByModule(this.router.url, route);
    }
}
