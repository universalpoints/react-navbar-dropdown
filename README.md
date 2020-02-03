# react-navbar-dropdown

This npm-package provides a dropdown component for React.
The dropdown component is flexible for many use cases.

## Installation

```console
// with npm
$ npm install --save react-navbar-dropdown

// with yarn
$ yarn add react-navbar-dropdown
```

## Examples

### Example 1

```javascript
// in jsx
return (
  <NavbarDropdown>
    <NavbarDropdown.Toggle>
      <NavbarDropdown.Open className="menu__item">
        <FontAwesomeIcon icon={faCaretDown} fixedWidth />
      </NavbarDropdown.Open>
      <NavbarDropdown.Close className="menu__item">
        <FontAwesomeIcon icon={faCaretUp} fixedWidth />
      </NavbarDropdown.Close>
    </NavbarDropdown.Toggle>
    <NavbarDropdown.Menu
      className="example1-dropdown-menu"
      between="4px"
      align="right"
    >
      <NavbarDropdown.Item
        className="example1-dropdown-menu-item"
        onClick={() => alert('Item 1: clicked!')}
      >
        <div><FontAwesomeIcon icon={faUser} fixedWidth /></div>
        <div className="example1-dropdown-menu-item__spacer" />
        <div className="example1-dropdown-menu-item__text">Item 1</div>
      </NavbarDropdown.Item>
      <NavbarDropdown.Item
        className="example1-dropdown-menu-item"
        onClick={() => alert('Item 2: clicked!')}
      >
        <div><FontAwesomeIcon icon={faBookmark} fixedWidth /></div>
        <div className="example1-dropdown-menu-item__spacer" />
        <div className="example1-dropdown-menu-item__text">Item 2</div>
      </NavbarDropdown.Item>
      <NavbarDropdown.Item
        className="example1-dropdown-menu-item"
        onClick={() => alert('Item 3: clicked!')}
      >
        <div><FontAwesomeIcon icon={faArchive} fixedWidth /></div>
        <div className="example1-dropdown-menu-item__spacer" />
        <div className="example1-dropdown-menu-item__text">Item 3</div>
      </NavbarDropdown.Item>
      <NavbarDropdown.Item
        className="example1-dropdown-menu-item"
        onClick={() => alert('Item 4: clicked!')}
      >
        <div><FontAwesomeIcon icon={faCog} fixedWidth /></div>
        <div className="example1-dropdown-menu-item__spacer" />
        <div className="example1-dropdown-menu-item__text">Item 4</div>
      </NavbarDropdown.Item>
    </NavbarDropdown.Menu>
  </NavbarDropdown>
);
```

```scss
// in scss
.example1-dropdown-menu {
  display: flex;
  flex-direction: column;
  padding: 8px 0px;
  background-color: #FFFFFF;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #C3C5C7;
}

.example1-dropdown-menu-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 26px;
  font-size: 12px;
  color: #333537;

  &:hover {
    background-color: #F3F5F7;
  }

  &__spacer {
    width: 6px;
  }

  &__text {
    padding: 0px 2px;
  }
}
```

[Result](https://riswu.github.io/react-navbar-dropdown-examples/#/example1)

### Example 2

```javascript
// in jsx
return (
  <NavbarDropdown>
    <NavbarDropdown.Toggle>
      <NavbarDropdown.Open className="menu__item">
        <FontAwesomeIcon icon={faTh} fixedWidth />
      </NavbarDropdown.Open>
      <NavbarDropdown.Close className="menu__item">
        <FontAwesomeIcon icon={faTimes} fixedWidth />
      </NavbarDropdown.Close>
    </NavbarDropdown.Toggle>
    <NavbarDropdown.Menu
      className="example2-dropdown-menu"
      between="4px"
      align="right"
    >
      <div className="example2-dropdown-menu__row">
        <NavbarDropdown.Item
          className="example2-dropdown-menu-item"
          onClick={() => alert('Item 1: clicked!')}
        >
          <div className="example2-dropdown-menu-item__icon">
            <FontAwesomeIcon icon={faUser} fixedWidth />
          </div>
          <div className="example2-dropdown-menu-item__text">Item 1</div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item
          className="example2-dropdown-menu-item"
          onClick={() => alert('Item 2: clicked!')}
        >
          <div className="example2-dropdown-menu-item__icon">
            <FontAwesomeIcon icon={faBookmark} fixedWidth />
          </div>
          <div className="example2-dropdown-menu-item__text">Item 2</div>
        </NavbarDropdown.Item>
      </div>
      <div className="example2-dropdown-menu__row">
        <NavbarDropdown.Item
          className="example2-dropdown-menu-item"
          onClick={() => alert('Item 3: clicked!')}
        >
          <div className="example2-dropdown-menu-item__icon">
            <FontAwesomeIcon icon={faArchive} fixedWidth />
          </div>
          <div className="example2-dropdown-menu-item__text">Item 3</div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item
          className="example2-dropdown-menu-item"
          onClick={() => alert('Item 4: clicked!')}
        >
          <div className="example2-dropdown-menu-item__icon">
            <FontAwesomeIcon icon={faCog} fixedWidth />
          </div>
          <div className="example2-dropdown-menu-item__text">Item 4</div>
        </NavbarDropdown.Item>
      </div>
    </NavbarDropdown.Menu>
  </NavbarDropdown>
);
```

```scss
// in scss
.example2-dropdown-menu {
  display: flex;
  flex-direction: column;
  padding: 8px 8px;
  background-color: #FFFFFF;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #C3C5C7;

  &__row {
    display: flex;
    flex-direction: row;
  }
}

.example2-dropdown-menu-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;
  height: 60px;
  width: 80px;
  color: #333537;

  &:hover {
    background-color: #F3F5F7;
  }

  &__icon {
    font-size: 20px;
  }

  &__text {
    font-size: 12px;
  }
}
```

[Result](https://riswu.github.io/react-navbar-dropdown-examples/#/example2)

## License

react-navbar-dropdown is released under the MIT license.
