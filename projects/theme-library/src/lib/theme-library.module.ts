import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { filter } from 'rxjs/operators';
import { NavgationService } from './services/navigation.service';
import { RanThemeLibraryNavigationState } from './states/navigation.state';
import { RanThemeLibraryLayoutState } from './states/layout.state';
import { ApplicationService } from './services/application.service';


export function setNavigationsAndFirstClassNavigatons(injector: Injector) {
  const fn = () => {
    return new Promise<void>((resolve) => {
      const navigationService = injector.get(NavgationService);
      navigationService.setNavigations();
      navigationService.setModuleNavigations();
      resolve();
    });
  };
  return fn;
}


@NgModule({
  imports: [NgxsModule.forFeature([RanThemeLibraryNavigationState, RanThemeLibraryLayoutState])],
  providers: [
    NavgationService,
    ApplicationService,
    /**
     * bug:未调用权限内的菜单
     */
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [Injector],
      useFactory: setNavigationsAndFirstClassNavigatons
    }
  ]
})
export class ThemeLibraryModule {
  constructor(
    router: Router,
    navgationService: NavgationService,
  ) {
    // 监听路由变更
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        navgationService.setNavigationsByRouteEvent(event);
      });
  }
}
