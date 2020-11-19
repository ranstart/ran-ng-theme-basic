import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ThemeAntModule } from 'projects/theme-ant/src/lib/theme-ant.module';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ThemeSharedModule,
    ThemeAntModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    ThemeAntModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
  ],
  providers: [],
})
export class SharedModule { }
