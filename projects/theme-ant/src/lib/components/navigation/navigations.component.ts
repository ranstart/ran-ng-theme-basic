import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd';
import { NavigationsDrawerComponent } from './navigations-drawer.component';

@Component({
    selector: 'ran-one-theme-ant-navigations',
    templateUrl: './navigations.component.html'
})
export class NavigationsComponent {

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
            nzContent: NavigationsDrawerComponent
        });
    }
}
