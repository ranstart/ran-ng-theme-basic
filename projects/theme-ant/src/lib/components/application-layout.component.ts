import { Config, ConfigState, eLayoutType } from '@abp/ng.core';
import { slideFromBottom } from '@abp/ng.theme.shared';
import { Component, InjectFlags, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { NavgationService, RanThemeLibraryLayoutState, SetSidebarState } from '@ran-ng/theme-library';
import { Observable } from 'rxjs';
import { ThemeAnt } from '../models/theme-ant';
import { THEME_ANT_TOKEN } from '../tokens/theme-ant.token';

@Component({
    selector: 'ran-theme-ant-application-layout',
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

    navigationPosition = 'header';

    constructor(
        injector: Injector,
        private store: Store,
        private navigationService: NavgationService
    ) {
        const options = injector.get<ThemeAnt.ThemeAntOptions>(THEME_ANT_TOKEN, {}, InjectFlags.Optional);
        if (options &&
            options.navigationPosition &&
            options.navigationPosition !== 'header'
        ) {
            this.navigationPosition = options.navigationPosition;
        }
    }

    ngOnInit() {
        this.navigationService.setNavigations();
        this.navigationService.setModuleNavigations();
    }

    setSidebarState() {
        this.store.dispatch(new SetSidebarState());
    }
}
