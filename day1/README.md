## Day 1

1/12/2022

I have already started on The Odin Project Full Stack Bootcamp online.
So far I am on the Foundations > Javascript > Fundamentals Part 3.

I already learned about the past couple days:

- HTML
- CSS
- Javascript (basics of the language)

But in the Fundamentals part 3, I've learned about:

- Functions (calls and return)
- Function Scope
- Return values
- Arrow Function

I know the fundamentals of programming already so nothing new here on learning besides the arrow function that is built in
Javascript. It is like relearning the basics but in a little more fast paced in my speed of going through it.

Did practice problems from the Fundaments part 3 page.

#### Knowledge Check

- What are functions useful for?

Functions are useful for a specific task that needs to be done. They are reuseable blocks of code that can perform the same task needed to be done.
Can be called easily with a line of code.

- How do you invoke a function?

First define the function like

function myFunc() {
    //Code here
}

//Then call it to be used, if not called, will never be used
myFunc(); //Call function here

- What are anonymous functions?

Anonymous functions are functions that are not defined by named. They are functions that are expected to be called by an event.

function (){
    alert("hello");
}

- What is function scope?

Function scope are values and expressions that are avaliable to use depending where they are declared. Can be global(outside a function) or local (inside a function);

- What are return values?

Return values are the values that a function returns back to the main scope or to another function.

- What are arrow functions?

Work like return values, basically creates a whole new function and returns a value without needing to create the function. 
Example: 

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3