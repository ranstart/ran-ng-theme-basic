import { ABP } from '@abp/ng.core';
import { ModuleNavigation } from '../models/navigation';

export class SetNavigationState {
    static readonly type = '[SetNavigationState] Set';
    constructor(public payload: ABP.FullRoute[]) { }
}

export class SetModuleNavigationState {
    static readonly type = '[SetModuleNavigationState] Set';
    constructor(public payload: ModuleNavigation[]) { }
}

export class SetTwoClassNavigationState {
    static readonly type = '[SetTwoClassNavigationState] Set';
    constructor(public payload: ABP.Route[]) { }
}

export class SetThreeClassNavigationState {
    static readonly type = '[SetThreeClassNavigationState] Set';
    constructor(public payload: ABP.Route[]) { }
}
