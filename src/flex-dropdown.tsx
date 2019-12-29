import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

// TODO: Centering
// TODO: Animation

export interface FlexDropdownProps { }

interface FlexDropdownState {
  open: boolean;
}

const _FlexDropdown = styled.div`
  position: relative;
`;

class FlexDropdown extends React.Component<FlexDropdownProps, FlexDropdownState> {
  constructor(props: FlexDropdownProps) {
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
      React.isValidElement(child) && child.type === FlexDropdownToggle
    );
    const toggleWithProps = React.cloneElement(toggle as React.ReactElement, {
      _open: this.state.open,
      _onClickToggle: this.handleClickToggle.bind(this)
    });
    const menu = React.Children.toArray(this.props.children).find(child =>
      React.isValidElement(child) && child.type === FlexDropdownMenu
    );
    const menuWithProps = React.cloneElement(menu as React.ReactElement, {
      _onClickItem: this.handleClickItem.bind(this)
    });

    return (
      <_FlexDropdown>
        {toggleWithProps}
        {this.state.open && menuWithProps}
      </_FlexDropdown>
    );
  }
}

export default onClickOutside(FlexDropdown);

export interface FlexDropdownToggleProps {
  _open?: boolean;
  _onClickToggle?: () => void;
}

export const FlexDropdownToggle: React.FC<FlexDropdownToggleProps> = props => {
  const open = React.Children.toArray(props.children).find(child =>
    React.isValidElement(child) && child.type === FlexDropdownOpen
  );
  const openWithProps = React.cloneElement(open as React.ReactElement, {
    _onClickToggle: () => props._onClickToggle!()
  });
  const close = React.Children.toArray(props.children).find(child =>
    React.isValidElement(child) && child.type === FlexDropdownClose
  );
  const closeWithProps = React.cloneElement(close as React.ReactElement, {
    _onClickToggle: () => props._onClickToggle!()
  });

  return props._open ? closeWithProps : openWithProps;
};

export interface FlexDropdownOpenProps {
  className?: string;
  style?: React.CSSProperties;
  _onClickToggle?: () => void;
}

const _FlexDropdownOpen = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const FlexDropdownOpen: React.FC<FlexDropdownOpenProps> = props => {
  return (
    <_FlexDropdownOpen
      className={props.className ? props.className : ''}
      style={props.style ? props.style : {}}
      onClick={() => props._onClickToggle!()}
    >
      {props.children}
    </_FlexDropdownOpen>
  );
};

export interface FlexDropdownCloseProps {
  className?: string;
  style?: React.CSSProperties;
  _onClickToggle?: () => void;
}

const _FlexDropdownClose = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const FlexDropdownClose: React.FC<FlexDropdownCloseProps> = props => {
  return (
    <_FlexDropdownClose
      className={props.className ? props.className : ''}
      style={props.style ? props.style : {}}
      onClick={() => props._onClickToggle!()}
    >
      {props.children}
    </_FlexDropdownClose>
  );
};

export interface FlexDropdownMenuProps {
  className?: string;
  style?: React.CSSProperties;
  interval: string;
  align: 'left' | 'right';
  _onClickItem?: () => void;
}

const _FlexDropdownMenu = styled.div`
  position: absolute;
  width: max-content;
`;

export const FlexDropdownMenu: React.FC<FlexDropdownMenuProps> = props => {
  let style: React.CSSProperties = {
    top: `calc(100% + ${props.interval})`
  };
  if (props.align === 'left') {
    style = Object.assign(style, { left: '0px' });
  } else if (props.align === 'right') {
    style = Object.assign(style, { right: '0px' });
  }

  const children = React.Children.map(props.children, child => {
    if (
      React.isValidElement(child) &&
      (child.type === FlexDropdownContainer || child.type === FlexDropdownItem)
    ) {
      return React.cloneElement(child, {
        _onClickItem: () => props._onClickItem!()
      });
    } else {
      return child;
    }
  });

  return (
    <_FlexDropdownMenu style={style}>
      <div
        className={props.className ? props.className : ''}
        style={props.style ? props.style : {}}
      >
        {children}
      </div>
    </_FlexDropdownMenu>
  );
};

export interface FlexDropdownContainerProps {
  className?: string;
  style?: React.CSSProperties;
  _onClickItem?: () => void;
}

export const FlexDropdownContainer: React.FC<FlexDropdownContainerProps> = props => {
  const children = React.Children.map(props.children, child => {
    if (
      React.isValidElement(child) &&
      (child.type === FlexDropdownContainer || child.type === FlexDropdownItem)
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

export interface FlexDropdownItemProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  _onClickItem?: () => void;
}

const _FlexDropdownItem = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const FlexDropdownItem: React.FC<FlexDropdownItemProps> = props => {
  return (
    <_FlexDropdownItem
      className={props.className ? props.className : ''}
      style={props.style ? props.style : {}}
      onClick={e => {
        if (props.onClick) props.onClick(e);
        props._onClickItem!();
      }}
    >
      {props.children}
    </_FlexDropdownItem>
  );
};
