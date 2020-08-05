import { ABP, Config, ConfigState } from '@abp/ng.core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RanThemeLibraryNavigationState, NavgationService, FirstClassNavigation } from '@ran-ng/theme-library';

@Component({
    selector: 'ran-one-theme-ant-navigations-header',
    templateUrl: './navigations-header.component.html'
})
export class NavigationsHeaderComponent {
    @Select(RanThemeLibraryNavigationState.getFirstClassNavigationState)
    navigations$: Observable<FirstClassNavigation[]>;

    get appInfo(): Config.Application {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }

    constructor(
        private store: Store,
        private router: Router,
        private appNavigationService: NavgationService,
    ) {
    }

    navigationByRoute(route: ABP.FullRoute) {
        const url = this.appNavigationService.getNavigationUrlByRoute(route);
        this.router.navigateByUrl(url);
    }
}
