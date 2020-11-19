import { CoreModule } from '@abp/ng.core';
import { IdentityConfigModule } from '@abp/ng.identity.config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management.config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management.config';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { AccountConfigModule } from '@ran-ng/account-config';
import { MessagesConfigModule } from '@ran-ng/messages-config';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { THEME_ANT_LAYOUTS, ThemeAntModule } from '../../projects/theme-ant/src/public-api';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './shared/icons-provider.module';
import { SharedModule } from './shared/shared.module';


registerLocaleData(zh);

const LOGGERS = [NgxsLoggerPluginModule.forRoot({ disabled: true })];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ThemeSharedModule.forRoot(),
    CoreModule.forRoot({
      requirements: {
        layouts: THEME_ANT_LAYOUTS
      },
      environment,
    }),
    OAuthModule.forRoot(),
    NgxsModule.forRoot([]),
    AccountConfigModule.forRoot({ redirectUrl: '/' }),
    IdentityConfigModule,
    TenantManagementConfigModule,
    SettingManagementConfigModule,

    // MessagesLibraryConfigModule,
    MessagesConfigModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ...(environment.production ? [] : LOGGERS),
    IconsProviderModule,
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class AppModule { }
