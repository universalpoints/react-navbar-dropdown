import {
  default as _FlexDropdown,
  FlexDropdownToggle,
  FlexDropdownOpen,
  FlexDropdownClose,
  FlexDropdownMenu,
  FlexDropdownContainer,
  FlexDropdownItem
} from './flex-dropdown';

export default class FlexDropdown extends _FlexDropdown {
  static Toggle = FlexDropdownToggle;
  static Open = FlexDropdownOpen;
  static Close = FlexDropdownClose;
  static Menu = FlexDropdownMenu;
  static Container = FlexDropdownContainer;
  static Item = FlexDropdownItem;
}
