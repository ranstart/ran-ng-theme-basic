import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ThemeLibraryModule } from '@ran-ng/theme-library';
import { NzAvatarModule, NzBadgeModule, NzBreadCrumbModule, NzButtonModule, NzDrawerModule, NzDropDownModule, NzIconModule, NzLayoutModule, NzMenuModule, NzPopoverModule } from 'ng-zorro-antd';
import { AccountLayoutComponent } from './components/account-layout.component';
import { ApplicationLayoutComponent } from './components/application-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout.component';
import { HeaderRightComponent } from './components/header-right/header-right.component';
import { ModuleNavigationsDrawerTriggerComponent } from './components/module-navigations/module-navigations-drawer-trigger.component';
import { ModuleNavigationsDrawerComponent } from './components/module-navigations/module-navigations-drawer.component';
import { ModuleNavigationsHeaderComponent } from './components/module-navigations/module-navigations-header.component';
import { SideNavigationsComponent } from './components/side-navigations/side-navigations.component';
import { ValidationErrorComponent } from './components/validation-error.component';
import { ThemeAnt } from './models/theme-ant';
import { InitialService } from './services/initial.service';
import { THEME_ANT_TOKEN } from './tokens/theme-ant.token';

export const THEME_ANT_LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];

@NgModule({
  declarations: [
    HeaderRightComponent,
    ModuleNavigationsDrawerTriggerComponent,
    ModuleNavigationsDrawerComponent,
    SideNavigationsComponent,
    ModuleNavigationsHeaderComponent,
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
  ],
  exports: [
    ...THEME_ANT_LAYOUTS
  ],
  entryComponents: [
    ...THEME_ANT_LAYOUTS,
    ModuleNavigationsDrawerComponent
  ]
})
export class ThemeAntModule {
  constructor(private initialService: InitialService) { }

  static forRoot(options: ThemeAnt.ThemeAntOptions = {}): ModuleWithProviders<RootThemeAntModule> {
    return {
      ngModule: RootThemeAntModule,
      providers: [
        { provide: THEME_ANT_TOKEN, useValue: options }
      ],
    };
  }
}

@NgModule({
  imports: [
    NgxValidateCoreModule.forRoot({
      targetSelector: '.form-group',
      blueprints: {
        creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
        email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
        invalid: 'AbpValidation::ThisFieldIsNotValid.',
        max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        maxlength:
          'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
        min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        minlength:
          'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
        ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
        passwordMismatch: 'AbpIdentity::Volo.Abp.Identity:PasswordConfirmationFailed',
        range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        required: 'AbpValidation::ThisFieldIsRequired.',
        url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
      },
      errorTemplate: ValidationErrorComponent,
    }),
  ],
})
export class RootThemeAntModule { }
