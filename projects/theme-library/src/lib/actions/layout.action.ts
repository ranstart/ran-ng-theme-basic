/**
 * setSidebarState
 */
export class SetSidebarState {
    static readonly type = '[SidebarState] Set';
    constructor(public payload?: boolean) { }
}
