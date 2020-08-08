import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetSidebarState } from '../actions/layout.action';
import { LayoutState } from '../models/layout';

@State<LayoutState>({
    name: 'RanThemeLibraryLayoutState',
    defaults: { sidebarState: true } as LayoutState
})
@Injectable()
export class RanThemeLibraryLayoutState {

    @Selector()
    static getSidebarState({ sidebarState }: LayoutState): boolean {
        return sidebarState;
    }

    @Action(SetSidebarState)
    setSidebarState({ getState, patchState }: StateContext<LayoutState>, { payload }: SetSidebarState) {
        const { sidebarState } = getState();
        let _sidebarState = !sidebarState;
        if (payload !== undefined) {
            _sidebarState = payload;
        }
        patchState({ sidebarState: _sidebarState });
    }
}
