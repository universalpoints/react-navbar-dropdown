import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

// TODO: Centering
// TODO: Animation
// TODO: Hover or Click

export interface NavbarDropdownProps { }

interface NavbarDropdownState {
  open: boolean;
}

const _NavbarDropdown = styled.div`
  position: relative;
`;

class NavbarDropdown extends React.Component<NavbarDropdownProps, NavbarDropdownState> {
  constructor(props: NavbarDropdownProps) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClickToggle() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  handleClickItem() {
    this.setState({
      open: false
    });
  }

  handleClickOutside() {
    this.setState({
      open: false
    });
  }

  render() {
    const toggle = React.Children.toArray(this.props.children).find(child =>
      React.isValidElement(child) && child.type === NavbarDropdownToggle
    );
    const toggleWithProps = React.cloneElement(toggle as React.ReactElement, {
      _open: this.state.open,
      _onClickToggle: this.handleClickToggle.bind(this)
    });
    const menu = React.Children.toArray(this.props.children).find(child =>
      React.isValidElement(child) && child.type === NavbarDropdownMenu
    );
    const menuWithProps = React.cloneElement(menu as React.ReactElement, {
      _onClickItem: this.handleClickItem.bind(this)
    });

    return (
      <_NavbarDropdown>
        {toggleWithProps}
        {this.state.open && menuWithProps}
      </_NavbarDropdown>
    );
  }
}

export default onClickOutside(NavbarDropdown);

export interface NavbarDropdownToggleProps {
  _open?: boolean;
  _onClickToggle?: () => void;
}

export const NavbarDropdownToggle: React.FC<NavbarDropdownToggleProps> = props => {
  const open = React.Children.toArray(props.children).find(child =>
    React.isValidElement(child) && child.type === NavbarDropdownOpen
  );
  const openWithProps = React.cloneElement(open as React.ReactElement, {
    _onClickToggle: () => props._onClickToggle!()
  });
  const close = React.Children.toArray(props.children).find(child =>
    React.isValidElement(child) && child.type === NavbarDropdownClose
  );
  const closeWithProps = React.cloneElement(close as React.ReactElement, {
    _onClickToggle: () => props._onClickToggle!()
  });

  return props._open ? closeWithProps : openWithProps;
};

export interface NavbarDropdownOpenProps {
  className?: string;
  style?: React.CSSProperties;
  _onClickToggle?: () => void;
}

const _NavbarDropdownOpen = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const NavbarDropdownOpen: React.FC<NavbarDropdownOpenProps> = props => {
  return (
    <_NavbarDropdownOpen
      className={props.className ? props.className : ''}
      style={props.style ? props.style : {}}
      onClick={() => props._onClickToggle!()}
    >
      {props.children}
    </_NavbarDropdownOpen>
  );
};

export interface NavbarDropdownCloseProps {
  className?: string;
  style?: React.CSSProperties;
  _onClickToggle?: () => void;
}

const _NavbarDropdownClose = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const NavbarDropdownClose: React.FC<NavbarDropdownCloseProps> = props => {
  return (
    <_NavbarDropdownClose
      className={props.className ? props.className : ''}
      style={props.style ? props.style : {}}
      onClick={() => props._onClickToggle!()}
    >
      {props.children}
    </_NavbarDropdownClose>
  );
};

export interface NavbarDropdownMenuProps {
  className?: string;
  style?: React.CSSProperties;
  between: string;
  align: 'left' | 'right';
  _onClickItem?: () => void;
}

const _NavbarDropdownMenu = styled.div`
  position: absolute;
  width: max-content;
`;

export const NavbarDropdownMenu: React.FC<NavbarDropdownMenuProps> = props => {
  let style: React.CSSProperties = {
    top: `calc(100% + ${props.between})`
  };
  if (props.align === 'left') {
    style = Object.assign(style, { left: '0px' });
  } else if (props.align === 'right') {
    style = Object.assign(style, { right: '0px' });
  }

  const children = React.Children.map(props.children, child => {
    if (
      React.isValidElement(child) &&
      (child.type === NavbarDropdownContainer || child.type === NavbarDropdownItem)
    ) {
      return React.cloneElement(child, {
        _onClickItem: () => props._onClickItem!()
      });
    } else {
      return child;
    }
  });

  return (
    <_NavbarDropdownMenu style={style}>
      <div
        className={props.className ? props.className : ''}
        style={props.style ? props.style : {}}
      >
        {children}
      </div>
    </_NavbarDropdownMenu>
  );
};

export interface NavbarDropdownContainerProps {
  className?: string;
  style?: React.CSSProperties;
  _onClickItem?: () => void;
}

export const NavbarDropdownContainer: React.FC<NavbarDropdownContainerProps> = props => {
  const children = React.Children.map(props.children, child => {
    if (
      React.isValidElement(child) &&
      (child.type === NavbarDropdownContainer || child.type === NavbarDropdownItem)
    ) {
      return React.cloneElement(child, {
        _onClickItem: () => props._onClickItem!()
      });
    } else {
      return child;
    }
  });

  return (
    <div
      className={props.className ? props.className : ''}
      style={props.style ? props.style : {}}
    >
      {children}
    </div>
  );
};

export interface NavbarDropdownItemProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  _onClickItem?: () => void;
}

const _NavbarDropdownItem = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const NavbarDropdownItem: React.FC<NavbarDropdownItemProps> = props => {
  return (
    <_NavbarDropdownItem
      className={props.className ? props.className : ''}
      style={props.style ? props.style : {}}
      onClick={e => {
        if (props.onClick) props.onClick(e);
        props._onClickItem!();
      }}
    >
      {props.children}
    </_NavbarDropdownItem>
  );
};
