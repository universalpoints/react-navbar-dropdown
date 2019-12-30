import {
  default as _NavbarDropdown,
  NavbarDropdownToggle,
  NavbarDropdownOpen,
  NavbarDropdownClose,
  NavbarDropdownMenu,
  NavbarDropdownContainer,
  NavbarDropdownItem
} from './navbar-dropdown';

export default class NavbarDropdown extends _NavbarDropdown {
  static Toggle = NavbarDropdownToggle;
  static Open = NavbarDropdownOpen;
  static Close = NavbarDropdownClose;
  static Menu = NavbarDropdownMenu;
  static Container = NavbarDropdownContainer;
  static Item = NavbarDropdownItem;
}
