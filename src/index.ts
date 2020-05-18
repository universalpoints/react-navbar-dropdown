import {
  NavbarDropdown as NavbarDropdownMain,
  NavbarDropdownToggle,
  NavbarDropdownOpen,
  NavbarDropdownClose,
  NavbarDropdownMenu,
  NavbarDropdownItem,
} from './navbar-dropdown';

export default class NavbarDropdown extends NavbarDropdownMain {
  static Toggle = NavbarDropdownToggle;
  static Open = NavbarDropdownOpen;
  static Close = NavbarDropdownClose;
  static Menu = NavbarDropdownMenu;
  static Item = NavbarDropdownItem;
}
