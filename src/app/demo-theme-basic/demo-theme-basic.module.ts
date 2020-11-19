import { CoreModule } from '@abp/ng.core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoThemeBasicRoutingModule } from './demo-theme-basic-routing.module';
import { DemoThemeBasicComponent } from './demo-theme-basic.component';
import { ThemeZeroModule } from 'projects/theme-zero/src/public-api';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CoreModule,
        ThemeZeroModule,
        DemoThemeBasicRoutingModule,
    ],
    declarations: [
        DemoThemeBasicComponent
    ]
})
export class DemoThemeBasicModule { }
