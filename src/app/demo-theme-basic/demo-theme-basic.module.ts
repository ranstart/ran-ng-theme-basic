import { CoreModule } from '@abp/ng.core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeAntModule } from '@ran-one/ng.theme-ant';
import { DemoThemeBasicRoutingModule } from './demo-theme-basic-routing.module';
import { DemoThemeBasicComponent } from './demo-theme-basic.component';

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
