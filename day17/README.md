# Day 17

Learned how to contribute to any open source project by using the website [First Timers Only](https://www.firsttimersonly.com/)

**Contributing** was a bit nerve racking because not knowing what to contribute and how to do it was what was stopping me from doing so. But knowing how to do so now, I definetly would want to contribute more once I find open source projects I want to help with!

##### Back to Learning More on "Objects"

Using [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) to learn more on objects. But the javascript site has better explanation.

**Object Properties** and **Object Methods**

- name and age are properties
- bio and introduceSelf are methods

```javascript
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio: function() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    }
};
```

##### What is "this"
The *this* keyword refers to the current object the code is being written inside — so in this case this is equivalent to *person*.

Why use *this*? If using multiple objects, using the keyword *this* enables us to use the same method definition for every object we create.

Example:
```javascript
const person1 = {
  name: 'Chris',
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  }
}

const person2 = {
  name: 'Deepti',
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  }
}
```

##### Constructors

Very new concept to me.

A constructor is just a function called using the **new** keyword. When you call a constructor, it will:

- create a new object
- bind this to the new object, so you can refer to this in your constructor code
- run the code in the constructor 
- return the new object.

Constructor must start with a *CAPITAL LETTER* and are named for the type of object they create. Example below:

```javascript
// How to create a constructor
function Person(name) { //"Person" is capitalized
    this.name = name;
    this.introductSelf = function() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

// How to call a constructor
const salva = new Person('Salva');
salva.name;
salva.introduceSelf();

const frankie = new Person('Frankie');
frankie.name;
frankie.introduceSelf();
```

##### Practice Problems Solved

1)
```javascript
const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log('Meow!');
  }
}

// Put your code here
let catName = cat['name'];
cat.greeting();
cat['color'] = 'black';


// Don't edit the code below here

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${ catName }.`;
para2.textContent = `The cat's color is ${ cat.color }.`;

section.appendChild(para1);
section.appendChild(para2);

// Output:
// The cat's name is Bertie.
// The cat's color is black.
```

2)
```javascript
let bandInfo;

// Put your code here
let band = {
 name: "Journey",
 nationality: "America",
 genre: "Rock",
 members: 5,
 formed: 1973,
 split: false,
 albums: [
  {
   "name": "Escape",
   "released": 1981
  },
  {
   "name": "Infinity",
   "released": 1978
  }
 ]
}; 

bandInfo = `My favorite OG band is ${band.name}. They are from ${band.nationality}. Currently they are still active! My 2 favorite albums from them are ${band.albums[0].name} and ${band.albums[1].name}.`;

// Output:
// My favorite OG band is Journey. They are from America. Currently they are still active! My 2 favorite albums from them are Escape and Infinity.

// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
    
```