import { ApplicationConfiguration, Config, ConfigState, GetAppConfiguration, SessionState, SetLanguage } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { Navigate, RouterState } from '@ngxs/router-plugin';
import { Select, Store } from '@ngxs/store';
// import { Message, MessageService } from '@ran-ng/messages';
import { NavgationService } from '@ran-ng/theme-library';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

@Component({
    selector: 'ran-one-theme-ant-navigations-header-right-menu',
    templateUrl: './navigations-header-right-menu.component.html',
})
export class NavigationsHeaderRightMenuComponent implements OnInit {

    @Select(ConfigState.getOne('currentUser'))
    currentUser$: Observable<ApplicationConfiguration.CurrentUser>;

    @Select(ConfigState.getDeep('localization.languages'))
    languages$: Observable<ApplicationConfiguration.Language[]>;

    get appInfo(): Config.Application {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }

    get selectedLangCulture(): string {
        return this.store.selectSnapshot(SessionState.getLanguage);
    }

    unReadMessageCount = 0;

    constructor(
        private store: Store,
        private oauthService: OAuthService,
        private appNavationService: NavgationService,
        // private messageService: MessageService
    ) {
    }

    ngOnInit() {
        // this.messageService.getAllUnreadMessages().subscribe(result => {
        //     this.unReadMessageCount = 0;
        //     result.forEach(item => this.unReadMessageCount += item.entry.count);
        // });
    }

    onChangeLang(cultureName: string) {
        this.store.dispatch(new SetLanguage(cultureName));
    }

    logout() {
        this.oauthService.logOut();
        this.store.dispatch(
            new Navigate(['/account/login'], null, {
                state: { redirectUrl: this.store.selectSnapshot(RouterState).state.url },
            }),
        );
        this.store.dispatch(new GetAppConfiguration());
        // 重新设置app导航
        this.appNavationService.setFirstClassNavations();
    }
}
