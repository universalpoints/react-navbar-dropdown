import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

interface NavbarDropdownContext {
  open: boolean;
  handleClickToggle: () => void;
  handleClickItem: () => void;
  handleClickOutside: () => void;
}

const ContextStore = React.createContext<Partial<NavbarDropdownContext>>({});

const StyledNavbarDropdown = styled.div`
  position: relative;
`;

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
      return (
        React.isValidElement(child) &&
        (child.type === NavbarDropdownMenu || child.type === NavbarDropdownCSSTransitionMenu)
      );
    });

    const contextValue = {
      open: this.state.open,
      handleClickToggle: this.handleClickToggle.bind(this),
      handleClickItem: this.handleClickItem.bind(this),
      handleClickOutside: this.handleClickOutside.bind(this),
    };

    return (
      <ContextStore.Provider value={contextValue}>
        <StyledNavbarDropdown>
          {toggle}
          {menu}
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

const StyledNavbarDropdownOpen = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export interface NavbarDropdownOpenProps {
  className?: string;
  style?: React.CSSProperties;
}

export const NavbarDropdownOpen: React.FC<NavbarDropdownOpenProps> = (props) => {
  const contextValue = React.useContext(ContextStore);

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

const StyledNavbarDropdownClose = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export interface NavbarDropdownCloseProps {
  className?: string;
  style?: React.CSSProperties;
}

export const NavbarDropdownClose: React.FC<NavbarDropdownCloseProps> = (props) => {
  const contextValue = React.useContext(ContextStore);

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

const StyledNavbarDropdownMenu = styled.div`
  position: absolute;
  width: max-content;
`;

export interface NavbarDropdownMenuProps {
  className?: string;
  style?: React.CSSProperties;
}

export const NavbarDropdownMenu: React.FC<NavbarDropdownMenuProps> = (props) => {
  const contextValue = React.useContext(ContextStore);

  const ref = React.useRef<HTMLDivElement>(null);
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

  return (
    <>
      {contextValue.open! && (
        <StyledNavbarDropdownMenu
          ref={ref}
          className={props.className ? props.className : ''}
          style={props.style ? props.style : {}}
        >
          {props.children}
        </StyledNavbarDropdownMenu>
      )}
    </>
  );
};

type CSSTransitionProps = React.ComponentProps<typeof CSSTransition>;

export type NavbarDropdownCSSTransitionMenuProps = NavbarDropdownMenuProps & CSSTransitionProps;

export const NavbarDropdownCSSTransitionMenu: React.FC<NavbarDropdownCSSTransitionMenuProps> = (props) => {
  const contextValue = React.useContext(ContextStore);

  const ref = React.useRef<HTMLDivElement>(null);
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

  return (
    <CSSTransition in={contextValue.open!} unmountOnExit {...props}>
      <StyledNavbarDropdownMenu
        ref={ref}
        className={props.className ? props.className : ''}
        style={props.style ? props.style : {}}
      >
        {props.children}
      </StyledNavbarDropdownMenu>
    </CSSTransition>
  );
};

const StyledNavbarDropdownItem = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export interface NavbarDropdownItemProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export const NavbarDropdownItem: React.FC<NavbarDropdownItemProps> = (props) => {
  const contextValue = React.useContext(ContextStore);

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
