/**
 * setSidebarState
 */
export class SetSidebarState {
    static readonly type = '[SidebarState] Set';
    constructor(public payload?: boolean) { }
}

export class SetContentScollEvent {
    static readonly type = '[ContentScollEvent] Set';
    constructor(public payload: Event) { }
}

