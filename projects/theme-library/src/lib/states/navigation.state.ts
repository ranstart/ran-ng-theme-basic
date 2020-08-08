import { ABP } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetModuleNavigationState, SetNavigationState, SetThreeClassNavigationState, SetTwoClassNavigationState } from '../actions/navigation.action';
import { ModuleNavigation, NavigationState } from '../models/navigation';

@State<NavigationState>({
    name: 'RanThemeLibraryNavigationState',
    defaults: { navigations: [], moduleNavigations: [], twoClassNavigations: [], threeClassNavigations: [] } as NavigationState
})
@Injectable()
export class RanThemeLibraryNavigationState {

    @Selector()
    static getNavigationState({ navigations }: NavigationState): ABP.FullRoute[] {
        return navigations;
    }

    @Selector()
    static getModuleNavigationState({ moduleNavigations }: NavigationState): ModuleNavigation[] {
        return moduleNavigations;
    }

    @Selector()
    static getTwoClassNavigationState({ twoClassNavigations }: NavigationState): ABP.FullRoute[] {
        return twoClassNavigations;
    }

    @Selector()
    static getThreeClassNavigationState({ threeClassNavigations }: NavigationState): ABP.FullRoute[] {
        return threeClassNavigations;
    }

    @Action(SetNavigationState)
    setNavigationState({ patchState }: StateContext<NavigationState>, { payload }: SetNavigationState) {
        patchState({ navigations: payload });
    }

    @Action(SetModuleNavigationState)
    setModuleNavigationState({ patchState }: StateContext<NavigationState>, { payload }: SetModuleNavigationState) {
        patchState({ moduleNavigations: payload });
    }

    @Action(SetTwoClassNavigationState)
    setTwoClassNavigationState({ patchState }: StateContext<NavigationState>, { payload }: SetTwoClassNavigationState) {
        patchState({ twoClassNavigations: payload });
    }

    @Action(SetThreeClassNavigationState)
    setThreeClassNavigationState({ patchState }: StateContext<NavigationState>, { payload }: SetThreeClassNavigationState) {
        patchState({ threeClassNavigations: payload });
    }
}
