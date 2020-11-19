import { ABP } from '@abp/ng.core';
import { Application } from './application';

export interface NavigationState {
    navigations?: ABP.FullRoute[];
    moduleNavigations?: ModuleNavigation[];
    twoClassNavigations?: ABP.FullRoute[];
    threeClassNavigations?: ABP.FullRoute[];
}

export type ModuleNavigation = Application.ITenantApplication & ABP.FullRoute & ModuleNavigationExtra;

export interface ModuleNavigationExtra {
    isExternalLink?: boolean;
}
