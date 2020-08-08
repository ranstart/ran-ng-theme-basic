import { ABP } from '@abp/ng.core';
import { Component, TrackByFunction } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { RanThemeLibraryNavigationState, RanThemeLibraryLayoutState } from '@ran-ng/theme-library';
import { Observable } from 'rxjs';

@Component({
    selector: 'ran-theme-ant-side-navigations',
    templateUrl: './side-navigations.component.html'
})
export class SideNavigationsComponent {
    @Select(RanThemeLibraryNavigationState.getThreeClassNavigationState)
    public navigations$: Observable<ABP.FullRoute[]>;

    @Select(RanThemeLibraryLayoutState.getSidebarState)
    public sidebarState$: Observable<boolean>;

    constructor(private router: Router) { }

    trackByFn: TrackByFunction<ABP.FullRoute> = (_, item) => item.name;

    isOpened(route: ABP.FullRoute) {
        return route.children.some(m => (m as ABP.FullRoute).url === this.router.url);
    }

    getIconClass(route: ABP.FullRoute) {
        return !route.iconClass || route.iconClass.includes('fa') ? 'home' : route.iconClass;
    }
}
