## Day 11

Still going over DOM Manipulation and Events. Must get this down for trying to move forward too fast.

Things I learned:

- Event Capture
- Propagation
- Bubbling

**Capture** will make sure that it run the function on the way down rather than on the way up.

**Propagation** will stop bubbling, only trigger events in the middle of parents/childs on the DOM. Basically stops the function from running through its parents.

**Once** function will allow for the listen to happen once and will only allow it to happen once unless the page is refreshed.

```javascript
const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  e.stopPropagation(); // stop bubbling
  console.log(this.classList.value);
}


divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));

button.addEventListener('click', () => {
  console.log('Click!!');
}, {
  once: true
});
```

I read most of the article lessons on Javascript HTML DOM on the [W3Schools](https://www.w3schools.com/js/js_htmldom.asp) Website

## Knowledge Check!

- What is the DOM?

DOM stands for Document Object Model, a tree-like representation of contents of a webpage. Or a tree of nodes arranged in HTML.

- How do you target the nodes you want to work with?

Can target nodes using CSS-style selectors. Examples are 
- div.display
-.display (for a class)
- #container > .display (id parent to class in child)
-div#container > dis.display

- How do you create an element in the DOM?

Example of creating a div, calling the variable div
```javascript
const div = document.createElement('div');
```

- How do you add an element to the DOM?

```javascript
const container = document.querySelector('#container');
const div = document.createElement('div');

container.appendChild(div); //append the child into the parent
```

- How do you remove an element from the DOM?

```javascript
parentNode.removeChild(child); //removes child from the parent node
```

- How can you alter an element in the DOM?

There are many different ways of altering an element in DOM, using the CSS Style rules, can use that to create style to elements.
```javascript
const div = document.createElement('div');                     
// creates a new div referenced in the variable 'div'

div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white');    
// adds several style rules
```

- When adding text to a DOM element, should you use textContent or innerHTML? Why?

Not safe to use innerHTML because of injection use. Inputting it can access important files like cookies from the page.
*textContent* is much safer to do so to change the HTML elements.

- Where should you include your Javascript tag in your HTML file when working with DOM nodes?

<script></script> Should be at the bottom of the <body></body> to allow running javascript after the HTML has loaded.
Or using the *defer* keyword to load after the HTML is parsed.
```HTML
<head>
    <script src="js-file.js" defer></script>
</head>
```

- How do “events” and “listeners” work?

*Events* are actions that occur on your webpage such as mouse-clicks or keypresses.
*Listeners* are lisening when those events happen on the webpage.

- What are three ways to use events in your code?

Method 1
```HTML
<button onclick="alert('Hello World')">Click me</button>
```

Method 2
```HTML
<button id="btn">Click me!</button>
```
```javascript
const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');
```

Method 3
```HTML
<button id="btn">Click Me too!</button>
```
```javascript
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
});
```

- Why are event listeners the preferred way to handle events?

It allows us to attach listeners to multiple groups of nodes very easily using event handlers.


- What are the benefits of using named functions in your listeners?

Using named functions in our listeners allow us to create cleaner code. Also allows us to reuse it in multiple places.

- How do you attach listeners to groups of nodes?

Example:
```HTML
<div id="container">
    <button id="1">Click Me</button>
    <button id="2">Click Me</button>
    <button id="3">Click Me</button>
</div>
```
```javascript
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
```

- What is the difference between the return values of querySelector and querySelectorAll?

*element*.querySelector(*selector*) returns reference to the first match of selector
*element*.querySelectorAll(*selectors*) returns a “nodelist” containing references to all of the matches of the selectors

- What does a “nodelist” contain?

Nodelist contains all the list of selectors that reference the same.

- Explain the difference between “capture” and “bubbling”.

**capture** an event propagates from the outermost element to the target element.
**bubbling** is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors of the target element in the same nesting hierarchy till it reaches the outermost DOM element or document object.