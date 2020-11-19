import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ThemeLibraryModule } from '@ran-ng/theme-library/dev';
import { NzAvatarModule, NzBadgeModule, NzBreadCrumbModule, NzButtonModule, NzDrawerModule, NzDropDownModule, NzIconModule, NzLayoutModule, NzMenuModule, NzPopoverModule } from 'ng-zorro-antd';
import { AccountLayoutComponent } from './components/account-layout.component';
import { ApplicationLayoutComponent } from './components/application-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout.component';
import { ValidationErrorComponent } from './components/validation-error.component';
export const THEME_ANT_LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];

@NgModule({
  declarations: [
    ValidationErrorComponent,
    ...THEME_ANT_LAYOUTS
  ],
  imports: [
    CoreModule,
    ThemeSharedModule,
    ThemeLibraryModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzAvatarModule,
    NzIconModule,
    NzBadgeModule,
    NzDrawerModule,
    NzDropDownModule,
    NzButtonModule,
    NzPopoverModule,
    NgxValidateCoreModule.forRoot({
      targetSelector: '.form-group',
      blueprints: {
        email: 'AbpAccount::ThisFieldIsNotAValidEmailAddress.',
        max: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        maxlength: 'AbpAccount::ThisFieldMustBeAStringWithAMaximumLengthOf{1}[{{ requiredLength }}]',
        min: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        minlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf[{{ min }},{{ max }}]',
        required: 'AbpAccount::ThisFieldIsRequired.',
        passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
      },
      errorTemplate: ValidationErrorComponent,
    }),
  ],
  exports: []
})
export class ThemeZeroModule { }
