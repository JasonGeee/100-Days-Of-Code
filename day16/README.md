## Day 16

[Objects](https://javascript.info/object)

#### Objects

Example Javascript setup:

```javascript
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

let user = {
    name: "John", // name = property, "John" = value
    age: 21
};

alert(user.name); //using dot notation for accessing properties, alerts "John"

//to REMOVE properties
delete user.age;

//last property can end with COMMA called "trailing" or "hanging"
//makes easier to add/remove properties
let user = {
    name: "John",
    age: 21,
};
```

In order to **ACCESS** variables when setting variable to a new variable, must use sqare bracket notation
```javascript
let user = {
    name: "John",
    age: 30
};
let key = "name";

alert(user[key]); // alerts "John"
alert(user.key); // alerts undefined
```

##### Computed Properites
We can use square brackets in an object literal, when creating an object.
If setting property name to an object, can use dot notation for getting value.
```javascript
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, //name of property is taken from the variable fruit
};

alert(bag.apple) //prints 5
```

##### Property value shorthand
[short value](https://javascript.info/object#property-value-shorthand)

```javascript
let user = {
    name, //same as name : name
    age: 30
};
```

##### "in" operator

*left side* of **in* is the property name. Usually in quoted string. 

```javascript
let user = {name: "John", age: 30};

alert("name" in user); //returns true
alert("blabla" in user); //returns false, user.blabla doesn't exist
```
*Unless we set property name to a variable.*
```javascript
let user = {age: 30};

let key = "age";

alert(key in user); //returns true, property "age" exists
```

##### The "for...in" loop

Example syntax:
```javascript
for (key in object) {
    //executes body 
}

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    //keys
    alert(key); //name, age, isAdmin
    //property values of the key
    alert(user[key]); //John, 30, true
}
```

##### Ordered like an object

**Integer** property names are listed by ascending order.
But string named properties are ordered by the creation order.

```javascript
let user = {
    name: "John",
    surname: "Doe"
};
user.age = 30; //adds to object

for (let prop in user) {
    alert(prop); //name, surname, age
}
```

Did all the practice problems in the bottom of the webpage tutorial. Got them all correct!

1) 
```javascript
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
```
2)
```javascript
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
```
3)
```javascript
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390
```
4)
```javascript
function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] *= 2;
    }
  }
}

//function for printing out objects
function display(obj) {
  for (let prop in obj) {
    alert(obj[prop]);
  }
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
display(menu);
multiplyNumeric(menu);
display(menu);
// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

```