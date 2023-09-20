export interface Menus {
  Id: number;
  Description: string;
  Navigation: string;
  IdMenuPadre: number;
  Icon: string;
  subMenu: Menus[];
}
