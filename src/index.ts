import {
  NavbarDropdown as _NavbarDropdown,
  NavbarDropdownToggle,
  NavbarDropdownOpen,
  NavbarDropdownClose,
  NavbarDropdownMenu,
  NavbarDropdownItem
} from './navbar-dropdown';

export default class NavbarDropdown extends _NavbarDropdown {
  static Toggle = NavbarDropdownToggle;
  static Open = NavbarDropdownOpen;
  static Close = NavbarDropdownClose;
  static Menu = NavbarDropdownMenu;
  static Item = NavbarDropdownItem;
}
