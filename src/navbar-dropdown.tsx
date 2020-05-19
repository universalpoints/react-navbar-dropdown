import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

interface NavbarDropdownContextProps {
  open: boolean;
  handleClickToggle: () => void;
  handleClickItem: () => void;
  handleClickOutside: () => void;
}

const NavbarDropdownContext = React.createContext<Partial<NavbarDropdownContextProps>>({});

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
      <NavbarDropdownContext.Provider value={contextValue}>
        <StyledNavbarDropdown>
          {toggle}
          {menu}
        </StyledNavbarDropdown>
      </NavbarDropdownContext.Provider>
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

  const contextValue = React.useContext(NavbarDropdownContext);

  return contextValue.open! ? (close as React.ReactElement) : (open as React.ReactElement);
};

const StyledNavbarDropdownOpen = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const NavbarDropdownOpen: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const contextValue = React.useContext(NavbarDropdownContext);
  const { onClick, ...other } = props;

  return (
    <StyledNavbarDropdownOpen
      onClick={(e) => {
        if (onClick) onClick(e);
        contextValue.handleClickToggle!();
      }}
      {...other}
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

export const NavbarDropdownClose: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const contextValue = React.useContext(NavbarDropdownContext);
  const { onClick, ...other } = props;

  return (
    <StyledNavbarDropdownClose
      onClick={(e) => {
        if (onClick) onClick(e);
        contextValue.handleClickToggle!();
      }}
      {...other}
    >
      {props.children}
    </StyledNavbarDropdownClose>
  );
};

const StyledNavbarDropdownMenu = styled.div`
  position: absolute;
  width: max-content;
`;

export const NavbarDropdownMenu: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const contextValue = React.useContext(NavbarDropdownContext);

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
        <StyledNavbarDropdownMenu ref={ref} {...props}>
          {props.children}
        </StyledNavbarDropdownMenu>
      )}
    </>
  );
};

type CSSTransitionProps = React.ComponentProps<typeof CSSTransition>;

export type NavbarDropdownCSSTransitionMenuProps = React.HTMLAttributes<HTMLDivElement> & CSSTransitionProps;

export const NavbarDropdownCSSTransitionMenu: React.FC<NavbarDropdownCSSTransitionMenuProps> = (props) => {
  const contextValue = React.useContext(NavbarDropdownContext);

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
      <StyledNavbarDropdownMenu ref={ref} {...props}>
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

export const NavbarDropdownItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const contextValue = React.useContext(NavbarDropdownContext);
  const { onClick, ...other } = props;

  return (
    <StyledNavbarDropdownItem
      onClick={(e) => {
        if (onClick) onClick(e);
        contextValue.handleClickItem!();
      }}
      {...other}
    >
      {props.children}
    </StyledNavbarDropdownItem>
  );
};
