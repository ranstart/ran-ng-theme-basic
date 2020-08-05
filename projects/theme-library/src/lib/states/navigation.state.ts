import { ABP } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetFirstClassNavigationState, SetNavigationState, SetThreeClassNavigationState, SetTwoClassNavigationState } from '../actions/navigation.action';
import { FirstClassNavigation, NavigationState } from '../models/navigation';

@State<NavigationState>({
    name: 'RanThemeLibraryNavigationState',
    defaults: { navigations: [], firstClassNavations: [], twoClassNavigations: [], threeClassNavigations: [] } as NavigationState
})
@Injectable()
export class RanThemeLibraryNavigationState {

    @Selector()
    static getNavigationState({ navigations }: NavigationState): ABP.FullRoute[] {
        return navigations;
    }

    @Selector()
    static getFirstClassNavigationState({ firstClassNavations }: NavigationState): FirstClassNavigation[] {
        return firstClassNavations;
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

    @Action(SetFirstClassNavigationState)
    setFirstClassNavigationState({ patchState }: StateContext<NavigationState>, { payload }: SetFirstClassNavigationState) {
        patchState({ firstClassNavations: payload });
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
