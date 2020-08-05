import { Config, ConfigState, eLayoutType } from '@abp/ng.core';
import { slideFromBottom } from '@abp/ng.theme.shared';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { NavgationService, RanThemeLibraryLayoutState, SetSidebarState } from '@ran-ng/theme-library';
import { Observable } from 'rxjs';

@Component({
    selector: 'ran-one-theme-ant-application-layout',
    templateUrl: './application-layout.component.html',
    styleUrls: ['./application-layout.component.less'],
    encapsulation: ViewEncapsulation.None,
    animations: [slideFromBottom],
})
export class ApplicationLayoutComponent implements OnInit {

    static type = eLayoutType.application;

    @Select(RanThemeLibraryLayoutState.getSidebarState)
    public sidebarState$: Observable<boolean>;

    get appInfo(): Config.Application {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }

    constructor(
        private store: Store,
        private navigationService: NavgationService
    ) {
    }

    ngOnInit() {
        this.navigationService.setNavigations();
        this.navigationService.setFirstClassNavations();
    }

    setSidebarState() {
        this.store.dispatch(new SetSidebarState());
    }
}
