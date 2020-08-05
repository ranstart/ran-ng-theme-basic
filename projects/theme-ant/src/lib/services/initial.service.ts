import { AddReplaceableComponent, CONTENT_STRATEGY, DomInsertionService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AccountLayoutComponent } from '../components/account-layout.component';
import { ApplicationLayoutComponent } from '../components/application-layout.component';
import { EmptyLayoutComponent } from '../components/empty-layout.component';
import styles from '../constants/styles';
import { eThemeAntComponents } from '../enums/components';

@Injectable({ providedIn: 'root' })
export class InitialService {
    constructor(private domInsertion: DomInsertionService, private store: Store) {
        this.appendStyle();

        this.store.dispatch([
            new AddReplaceableComponent({
                key: eThemeAntComponents.ApplicationLayout,
                component: ApplicationLayoutComponent,
            }),
            new AddReplaceableComponent({
                key: eThemeAntComponents.AccountLayout,
                component: AccountLayoutComponent,
            }),
            new AddReplaceableComponent({
                key: eThemeAntComponents.EmptyLayout,
                component: EmptyLayoutComponent,
            }),
        ]);
    }

    appendStyle() {
        this.domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
    }
}