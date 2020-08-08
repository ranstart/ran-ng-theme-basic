import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd';
import { ModuleNavigationsDrawerComponent } from './module-navigations-drawer.component';

@Component({
    selector: 'ran-theme-ant-module-navigations-drawer-trigger',
    templateUrl: './module-navigations-drawer-trigger.component.html'
})
export class ModuleNavigationsDrawerTriggerComponent {

    constructor(
        private drawerService: NzDrawerService
    ) {
    }

    openNavigationsDrawer() {
        this.drawerService.create({
            nzClosable: false,
            nzPlacement: 'left',
            nzWidth: 320,
            nzBodyStyle: { padding: 0 },
            nzContent: ModuleNavigationsDrawerComponent
        });
    }
}
