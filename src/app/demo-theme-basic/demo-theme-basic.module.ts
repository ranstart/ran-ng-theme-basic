import { CoreModule } from '@abp/ng.core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoThemeBasicRoutingModule } from './demo-theme-basic-routing.module';
import { DemoThemeBasicComponent } from './demo-theme-basic.component';
import { ThemeAntModule } from 'projects/theme-ant/src/public-api';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CoreModule,
        ThemeAntModule,
        DemoThemeBasicRoutingModule,
    ],
    declarations: [
        DemoThemeBasicComponent
    ]
})
export class DemoThemeBasicModule { }
