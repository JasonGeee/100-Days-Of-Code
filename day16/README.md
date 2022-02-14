## Day 16

#### Objects

Example Javascript setup:

```javascript
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

let user = {
    name: "John", // name = property, "John" = value
    age: 21
};

alert(user.name); //using dot notation for accessing properties

//to REMOVE properties
delete user.age;

//last property can end with COMMA called "trailing" or "hanging"
//makes easier to add/remove properties
let user = {
    name: "John",
    age: 21,
};
```