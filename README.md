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
// ...
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
        className="example1-dropdown-menu__item"
        onClick={() => alert('Item 1: clicked!')}
      >
        Item 1
      </NavbarDropdown.Item>
      <NavbarDropdown.Item
        className="example1-dropdown-menu__item"
        onClick={() => alert('Item 2: clicked!')}
      >
        Item 2
      </NavbarDropdown.Item>
      <NavbarDropdown.Item
        className="example1-dropdown-menu__item"
        onClick={() => alert('Item 3: clicked!')}
      >
        Item 3
      </NavbarDropdown.Item>
      <NavbarDropdown.Item
        className="example1-dropdown-menu__item"
        onClick={() => alert('Item 4: clicked!')}
      >
        Item 4
      </NavbarDropdown.Item>
    </NavbarDropdown.Menu>
  </NavbarDropdown>
);
// ...
```

```scss
// in scss
// ...
.example1-dropdown-menu {
  display: flex;
  flex-direction: column;
  padding: 8px 0px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #D8D9DA;

  &__item {
    padding: 6px 32px;
    font-size: 12px;
    color: #383838;

    &:hover {
      background-color: #F8F9FA;
    }
  }
}
// ...
```

[Result](https://riswu.github.io/react-navbar-dropdown-examples/#/example1)

### Example 2

```javascript
// in jsx
// ...
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
          className="example2-dropdown-menu__item"
          style={{ backgroundColor: 'lightblue' }}
          onClick={() => alert('Item 1: clicked!')}
        >
          Item 1
        </NavbarDropdown.Item>
        <NavbarDropdown.Item
          className="example2-dropdown-menu__item"
          style={{ backgroundColor: 'lightgreen' }}
          onClick={() => alert('Item 2: clicked!')}
        >
          Item 2
        </NavbarDropdown.Item>
      </div>
      <div className="example2-dropdown-menu__row">
        <NavbarDropdown.Item
          className="example2-dropdown-menu__item"
          style={{ backgroundColor: 'orange' }}
          onClick={() => alert('Item 3: clicked!')}
        >
          Item 3
        </NavbarDropdown.Item>
        <NavbarDropdown.Item
          className="example2-dropdown-menu__item"
          style={{ backgroundColor: 'greenyellow' }}
          onClick={() => alert('Item 4: clicked!')}
        >
          Item 4
        </NavbarDropdown.Item>
      </div>
    </NavbarDropdown.Menu>
  </NavbarDropdown>
);
// ...
```

```scss
// in scss
// ...
.example2-dropdown-menu {
  display: flex;
  flex-direction: column;
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

    &:hover {
      box-shadow: 0px 0px 3px #D8D9DA;
    }
  }
}
// ...
```

[Result](https://riswu.github.io/react-navbar-dropdown-examples/#/example2)

## License

react-navbar-dropdown is released under the MIT license.
