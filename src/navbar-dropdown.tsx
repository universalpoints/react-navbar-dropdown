import React from 'react';
import styled from 'styled-components';

// TODO: Centering
// TODO: Animation
// TODO: Hover or Click

interface NavbarDropdownContext {
  open: boolean;
  handleClickToggle: () => void;
  handleClickItem: () => void;
  handleClickOutside: () => void;
}

const ContextStore = React.createContext<Partial<NavbarDropdownContext>>({});

interface NavbarDropdownState {
  open: boolean;
}

export class NavbarDropdown extends React.Component<{}, NavbarDropdownState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickToggle() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  handleClickItem() {
    this.setState({
      open: false,
    });
  }

  handleClickOutside() {
    this.setState({
      open: false,
    });
  }

  render() {
    const toggle = React.Children.toArray(this.props.children).find((child) => {
      return React.isValidElement(child) && child.type === NavbarDropdownToggle;
    });
    const menu = React.Children.toArray(this.props.children).find((child) => {
      return React.isValidElement(child) && child.type === NavbarDropdownMenu;
    });

    const contextValue = {
      open: this.state.open,
      handleClickToggle: this.handleClickToggle.bind(this),
      handleClickItem: this.handleClickItem.bind(this),
      handleClickOutside: this.handleClickOutside.bind(this),
    };

    const StyledNavbarDropdown = styled.div`
      position: relative;
    `;

    return (
      <ContextStore.Provider value={contextValue}>
        <StyledNavbarDropdown>
          {toggle}
          {this.state.open && menu}
        </StyledNavbarDropdown>
      </ContextStore.Provider>
    );
  }
}

export const NavbarDropdownToggle: React.FC = (props) => {
  const open = React.Children.toArray(props.children).find((child) => {
    return React.isValidElement(child) && child.type === NavbarDropdownOpen;
  });
  const close = React.Children.toArray(props.children).find((child) => {
    return React.isValidElement(child) && child.type === NavbarDropdownClose;
  });

  const contextValue = React.useContext(ContextStore);

  return contextValue.open! ? (close as React.ReactElement) : (open as React.ReactElement);
};

export interface NavbarDropdownOpenProps {
  className?: string;
  style?: React.CSSProperties;
}

export const NavbarDropdownOpen: React.FC<NavbarDropdownOpenProps> = (props) => {
  const contextValue = React.useContext(ContextStore);

  const StyledNavbarDropdownOpen = styled.div`
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <StyledNavbarDropdownOpen
      className={props.className ? props.className : ''}
      style={props.style ? props.style : {}}
      onClick={() => contextValue.handleClickToggle!()}
    >
      {props.children}
    </StyledNavbarDropdownOpen>
  );
};

export interface NavbarDropdownCloseProps {
  className?: string;
  style?: React.CSSProperties;
}

export const NavbarDropdownClose: React.FC<NavbarDropdownCloseProps> = (props) => {
  const contextValue = React.useContext(ContextStore);

  const StyledNavbarDropdownClose = styled.div`
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <StyledNavbarDropdownClose
      className={props.className ? props.className : ''}
      style={props.style ? props.style : {}}
      onClick={() => contextValue.handleClickToggle!()}
    >
      {props.children}
    </StyledNavbarDropdownClose>
  );
};

export interface NavbarDropdownMenuProps {
  className?: string;
  style?: React.CSSProperties;
  between: string;
  align: 'left' | 'right';
}

export const NavbarDropdownMenu: React.FC<NavbarDropdownMenuProps> = (props) => {
  let style: React.CSSProperties = {
    top: `calc(100% + ${props.between})`,
  };
  if (props.align === 'left') {
    style = Object.assign(style, { left: '0px' });
  } else if (props.align === 'right') {
    style = Object.assign(style, { right: '0px' });
  }

  const ref = React.useRef<HTMLDivElement>(null);
  const contextValue = React.useContext(ContextStore);
  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      contextValue.handleClickOutside!();
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const StyledNavbarDropdownMenu = styled.div`
    position: absolute;
    width: max-content;
  `;

  return (
    <StyledNavbarDropdownMenu ref={ref} style={style}>
      <div
        className={props.className ? props.className : ''}
        style={props.style ? props.style : {}}
      >
        {props.children}
      </div>
    </StyledNavbarDropdownMenu>
  );
};

export interface NavbarDropdownItemProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export const NavbarDropdownItem: React.FC<NavbarDropdownItemProps> = (props) => {
  const contextValue = React.useContext(ContextStore);

  const StyledNavbarDropdownItem = styled.div`
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <StyledNavbarDropdownItem
      className={props.className ? props.className : ''}
      style={props.style ? props.style : {}}
      onClick={(e) => {
        if (props.onClick) props.onClick(e);
        contextValue.handleClickItem!();
      }}
    >
      {props.children}
    </StyledNavbarDropdownItem>
  );
};
