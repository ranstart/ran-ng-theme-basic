import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoThemeBasicComponent } from './demo-theme-basic.component';
import { ApplicationLayoutComponent } from '@ran-one/ng.theme-ant';

const routes: Routes = [
    { path: '', redirectTo: 'light', pathMatch: 'full' },
    {
        path: 'light',
        component: ApplicationLayoutComponent,
        children: [
            { path: '', redirectTo: 'theme-one', pathMatch: 'full' },
            { path: 'theme-one', component: DemoThemeBasicComponent },
            { path: 'theme-two', component: DemoThemeBasicComponent },
            { path: 'theme-three', component: DemoThemeBasicComponent }
        ],
    },
    {
        path: 'dark',
        component: ApplicationLayoutComponent,
        children: [
            { path: '', redirectTo: 'theme-one', pathMatch: 'full' },
            { path: 'theme-one', component: DemoThemeBasicComponent },
            { path: 'theme-two', component: DemoThemeBasicComponent },
            { path: 'theme-three', component: DemoThemeBasicComponent }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DemoThemeBasicRoutingModule { }
