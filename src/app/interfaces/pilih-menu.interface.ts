interface PilihMenu {
    id: number | null;
    menu: string | null;
    subMenu: string | null;
}

const defPilihMenu: PilihMenu = {
    id: null,
    menu: null,
    subMenu: null
}

export {
    PilihMenu,
    defPilihMenu
}