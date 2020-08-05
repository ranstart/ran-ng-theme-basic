import { ABP } from '@abp/ng.core';
import { Application } from './application';

export interface NavigationState {
    navigations?: ABP.FullRoute[];
    firstClassNavations?: FirstClassNavigation[];
    twoClassNavigations?: ABP.FullRoute[];
    threeClassNavigations?: ABP.FullRoute[];
}

export type FirstClassNavigation = Application.ITenantApplication & ABP.FullRoute