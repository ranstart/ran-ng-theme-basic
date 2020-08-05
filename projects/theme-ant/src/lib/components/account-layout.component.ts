import { Config, ConfigState, eLayoutType } from '@abp/ng.core';
import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
    selector: 'ran-one-theme-ant-account-layout',
    templateUrl: './account-layout.component.html',
    styleUrls: ['./account-layout.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class AccountLayoutComponent {
    static type = eLayoutType.account;

    get appInfo(): Config.Application {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }

    get accountLogo() {
        return `${this.store.selectSnapshot(ConfigState.getApiUrl())}/common/images/account-logo.png`;
    }

    get backgroundImage(): string {
        return `url(${this.store.selectSnapshot(ConfigState.getApiUrl())}/common/images/login-bg.png)`;
    }

    constructor(
        private store: Store,
    ) {
    }
}
