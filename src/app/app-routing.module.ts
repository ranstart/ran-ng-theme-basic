import { ABP, eLayoutType } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      routes: {
        name: '::Menu:Home'
      } as ABP.Route
    }
  },
  {
    path: 'theme',
    loadChildren: () => import('./demo-theme-basic/demo-theme-basic.module').then(m => m.DemoThemeBasicModule),
    data: {
      routes: {
        name: 'Ran:Theme',
        path: 'theme',
        order: 3,
        layout: eLayoutType.application,
        children: [{
          name: 'Site::Menu:Sections',
          path: 'light',
          children: [
            { path: 'theme-one', name: '::Menu:Theme:Light:One', order: 1, iconClass: 'wechat' },
            { path: 'theme-two', name: '::Menu:Theme:Light:Two', order: 2, iconClass: 'wechat' },
            { path: 'theme-three', name: '::Menu:Theme:Light:Three', order: 3, iconClass: 'wechat' }
          ]
        }, {
          name: 'Site::Menu:Fields',
          path: 'dark',
          children: [
            { path: 'theme-one', name: '::Menu:Theme:Dark:One', order: 1 },
            { path: 'theme-two', name: '::Menu:Theme:Dark:Two', order: 2 },
            { path: 'theme-three', name: '::Menu:Theme:Dark:Three', order: 3 }
          ]
        }]
      } as ABP.FullRoute,
    },
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule)
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule)
  },
  {
    path: 'tenant-management',
    loadChildren: () => import('@abp/ng.tenant-management').then(m => m.TenantManagementModule)
  },
  {
    path: 'setting-management',
    loadChildren: () => import('@abp/ng.setting-management').then(m => m.SettingManagementModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('@ran-ng/messages').then(m => m.MessagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
