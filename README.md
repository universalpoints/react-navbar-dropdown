# react-flex-dropdown

This npm-package provides a dropdown component for React.
The dropdown component is flexible for many use cases.

## Installation

```console
// with npm
$ npm install --save react-flex-dropdown

// with yarn
$ yarn add react-flex-dropdown
```

## Examples

### Example 1

```javascript
// in jsx
<FlexDropdown>
  <FlexDropdown.Toggle>
    <FlexDropdown.Open className="menu__item">
      <FontAwesomeIcon icon={faCaretDown} fixedWidth />
    </FlexDropdown.Open>
    <FlexDropdown.Close className="menu__item">
      <FontAwesomeIcon icon={faCaretUp} fixedWidth />
    </FlexDropdown.Close>
  </FlexDropdown.Toggle>
  <FlexDropdown.Menu className="example1-dropdown-menu" interval="4px" align="right">
    <FlexDropdown.Item className="example1-dropdown-menu__item">Item 1</FlexDropdown.Item>
    <FlexDropdown.Item className="example1-dropdown-menu__item">Item 2</FlexDropdown.Item>
    <FlexDropdown.Item className="example1-dropdown-menu__item">Item 3</FlexDropdown.Item>
    <FlexDropdown.Item className="example1-dropdown-menu__item">Item 4</FlexDropdown.Item>
  </FlexDropdown.Menu>
</FlexDropdown>
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

[Result](https://riswu.github.io/react-flex-dropdown-examples/#/example1)

### Example 2

```javascript
// in jsx
<FlexDropdown>
  <FlexDropdown.Toggle>
    <FlexDropdown.Open className="menu__item">
      <FontAwesomeIcon icon={faBars} fixedWidth />
    </FlexDropdown.Open>
    <FlexDropdown.Close className="menu__item">
      <FontAwesomeIcon icon={faTimes} fixedWidth />
    </FlexDropdown.Close>
  </FlexDropdown.Toggle>
  <FlexDropdown.Menu className="example2-dropdown-menu" interval="4px" align="right">
    <FlexDropdown.Container className="example2-dropdown-menu__row">
      <FlexDropdown.Item
        className="example2-dropdown-menu__item"
        style={{ backgroundColor: 'lightblue' }}
      >
        Item 1
      </FlexDropdown.Item>
      <FlexDropdown.Item
        className="example2-dropdown-menu__item"
        style={{ backgroundColor: 'lightgreen' }}
      >
        Item 2
      </FlexDropdown.Item>
    </FlexDropdown.Container>
    <FlexDropdown.Container className="example2-dropdown-menu__row">
      <FlexDropdown.Item
        className="example2-dropdown-menu__item"
        style={{ backgroundColor: 'orange' }}
      >
        Item 3
      </FlexDropdown.Item>
      <FlexDropdown.Item
        className="example2-dropdown-menu__item"
        style={{ backgroundColor: 'greenyellow' }}
      >
        Item 4
      </FlexDropdown.Item>
    </FlexDropdown.Container>
  </FlexDropdown.Menu>
</FlexDropdown>
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

[Result](https://riswu.github.io/react-flex-dropdown-examples/#/example2)

## License

react-flex-dropdown is released under the MIT license.
