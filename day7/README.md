## Day 7

Today I will doing some more Javascript practice in the TOP > Fundamentals Part 4 exercises.

Test Driven Development (TDD) is a new to me so understanding this is a must when trying to become a Software Engineer.

Syntax on TDD so far:

```javascript
const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
```

`describle()` is the body of test.
`test()` fuynction describes what is happening in plain english includes `expect()`
`expect()` expects what is suppose to be outputted

Learned so much doing the practice problems. They are no joke! I did my best to come up with pesudocode on paper and then come back to actually coding the algorithm and solution.

## Knowledge check on Fundamental Part 4 of TOP

- What is an array?

An Array is a special variable that can hold multiple values like numbers, strings, characters.

- What are arrays useful for?

Array's arrays are very useful for creating a list, loop through each index if needed, and access certain indices.


- How do you access an array element?

To access an array element by using the bracket notation.

Example:
```javascript
let array = ["Banana", "Mango", "Blueberry"];
let fruit = array[0];
console.log(fruit); //returns Banana
```

- How do you change an array element?

Let the accessing element to a new variable
```javascript
let array = ["Banana", "Mango", "Blueberry"];
array[0] = "Orange";
```

- What are some useful array properties?

```javascript
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length; //returns the length of the array
```

- What are some useful array methods?

Many useful array methods!
```javascript
.join(); //Adds arrays together
.pop(); //removes last element of array
.push(); //pushes a new element at the end of an array
.length;
.splice();
.slice();
```

- What are loops useful for?

Loops are useful for repeating a function, or iterating through an array, or performing a specific action multiple times.

- What is the break statement?

```javascript
break; //statement is when it breaks out of a loop or statement. Basically to end the loop from when calling the break statement. Move on to other code out of the loop.
```
- What is the continue statement?
```javascript
continue; //statement skips to the next iteration of the loop. If you didn't want to access a certain variable in that loop, can skip using the continue statement.
```
- What is the advantage of writing automated tests?

An advantage of writing Test Driven Development Tests is to check if the code works. It helps create any loop holes around the code. Checks to see everything is working properly the way it is built. Also allows to test code faster rather than plugging in arguments over and over to see if it works.