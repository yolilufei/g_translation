export interface Chrome {
    contextMenus: ContextMenus
}

export interface ContextMenus {
    create: (option: ContextMenuOption) => any;
}

export interface ContextMenuOption {
    title: string;
    contexts?: string[];
    onclick: (...args?: any) => any;
}

export const chrome: Chrome;
