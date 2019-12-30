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
<NavbarDropdown>
  <NavbarDropdown.Toggle>
    <NavbarDropdown.Open className="menu__item">
      <FontAwesomeIcon icon={faCaretDown} fixedWidth />
    </NavbarDropdown.Open>
    <NavbarDropdown.Close className="menu__item">
      <FontAwesomeIcon icon={faCaretUp} fixedWidth />
    </NavbarDropdown.Close>
  </NavbarDropdown.Toggle>
  <NavbarDropdown.Menu className="example1-dropdown-menu" between="4px" align="right">
    <NavbarDropdown.Item className="example1-dropdown-menu__item">Item 1</NavbarDropdown.Item>
    <NavbarDropdown.Item className="example1-dropdown-menu__item">Item 2</NavbarDropdown.Item>
    <NavbarDropdown.Item className="example1-dropdown-menu__item">Item 3</NavbarDropdown.Item>
    <NavbarDropdown.Item className="example1-dropdown-menu__item">Item 4</NavbarDropdown.Item>
  </NavbarDropdown.Menu>
</NavbarDropdown>
```

```scss
// in scss
.example1-dropdown-menu {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0px;
  padding: 8px 0px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #D8D9DA;

  &__item {
    display: block;
    box-sizing: border-box;
    margin: 0px;
    padding: 6px 32px;
    text-decoration: none;
    font-size: 12px;
    font-weight: normal;
    color: #383838;

    &:hover {
      background-color: #F8F9FA;
    }
  }
}
```

[Result](https://riswu.github.io/react-navbar-dropdown-examples/#/example1)

### Example 2

```javascript
// in jsx
<NavbarDropdown>
  <NavbarDropdown.Toggle>
    <NavbarDropdown.Open className="menu__item">
      <FontAwesomeIcon icon={faBars} fixedWidth />
    </NavbarDropdown.Open>
    <NavbarDropdown.Close className="menu__item">
      <FontAwesomeIcon icon={faTimes} fixedWidth />
    </NavbarDropdown.Close>
  </NavbarDropdown.Toggle>
  <NavbarDropdown.Menu className="example2-dropdown-menu" between="4px" align="right">
    <NavbarDropdown.Container className="example2-dropdown-menu__row">
      <NavbarDropdown.Item
        className="example2-dropdown-menu__item"
        style={{ backgroundColor: 'lightblue' }}
      >
        Item 1
      </NavbarDropdown.Item>
      <NavbarDropdown.Item
        className="example2-dropdown-menu__item"
        style={{ backgroundColor: 'lightgreen' }}
      >
        Item 2
      </NavbarDropdown.Item>
    </NavbarDropdown.Container>
    <NavbarDropdown.Container className="example2-dropdown-menu__row">
      <NavbarDropdown.Item
        className="example2-dropdown-menu__item"
        style={{ backgroundColor: 'orange' }}
      >
        Item 3
      </NavbarDropdown.Item>
      <NavbarDropdown.Item
        className="example2-dropdown-menu__item"
        style={{ backgroundColor: 'greenyellow' }}
      >
        Item 4
      </NavbarDropdown.Item>
    </NavbarDropdown.Container>
  </NavbarDropdown.Menu>
</NavbarDropdown>
```

```scss
// in scss
.example2-dropdown-menu {
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 8px 8px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #D8D9DA;

  &__row {
    display: flex;
    flex-direction: row;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4px;
    height: 60px;
    width: 80px;
    font-size: 12px;
    color: #383838;
  }
}
```

[Result](https://riswu.github.io/react-navbar-dropdown-examples/#/example2)

## License

react-navbar-dropdown is released under the MIT license.
