interface SubMenu {
    text: string | null;
    url?: string | null;
    disabled: number | null;
}

const defSubMenu: SubMenu[] = []


interface Menu {
    id: number | null;
    menu: string | null;
    from: string | null;
    to: string | null;
    on: number | null;
    submenu: SubMenu[];
}

const defMenu: Menu[] = []

export {
    SubMenu,
    defSubMenu,
    Menu,
    defMenu
}