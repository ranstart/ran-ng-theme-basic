import { ABP } from '@abp/ng.core';
import { Abpone } from './abpone';

export interface NavigationState {
    moduleNavigations?: ModuleNavigation[];
    twoClassNavigations?: ABP.FullRoute[];
    threeClassNavigations?: ABP.FullRoute[];
    navigations?: ABP.FullRoute[];
}

export type ModuleNavigation = Abpone.ApplicationConfigrationTenantApp & ABP.FullRoute & ModuleNavigationExtra;

export interface ModuleNavigationExtra {
    isExternalLink?: boolean;
}
