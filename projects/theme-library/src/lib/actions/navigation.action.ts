import { ABP } from '@abp/ng.core';
import { FirstClassNavigation } from '../models/navigation';

export class SetNavigationState {
    static readonly type = '[SetNavigationState] Set';
    constructor(public payload: ABP.FullRoute[]) { }
}

export class SetFirstClassNavigationState {
    static readonly type = '[SetFirstClassNavigationState] Set';
    constructor(public payload: FirstClassNavigation[]) { }
}

export class SetTwoClassNavigationState {
    static readonly type = '[SetTwoClassNavigationState] Set';
    constructor(public payload: ABP.Route[]) { }
}

export class SetThreeClassNavigationState {
    static readonly type = '[SetThreeClassNavigationState] Set';
    constructor(public payload: ABP.Route[]) { }
}
