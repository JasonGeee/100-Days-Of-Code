## Day 9 

Working more on DOM Manipulation and Events in Javascript!

### DOM

#### Targeting Nodes with Selectors

There are different ways to do so. Example
```HTML
<div id="container"> 
  <div class="display"></div>
  <div class="controls"></div>
</div>
<!-- <div class="display"></div>: Can be accessed with the following -->
div.display
.display
#container > .display
div#container > div.display
```

**Query Selectors**

*element*.querySelector(*selector*) returns reference to the first match of selector
*element*.querySelectorAll(*selectors*) returns a “nodelist” containing references to all of the matches of the selectors

**Element Creation**

This function does NOT put your new element into the DOM - it simply creates it in memory.
```javascript
const div = document.createElement('div');
```

**Append Elements**

*parentNode*.appendChild(*childNode*) appends *childNode* as the last child of *parentNode*
*parentNode*.insertBefore(*newNode, referenceNode*) inserts *newNode* into *parentNode* before *referenceNode*

**Remove Elements**

*parentNode*.removeChild(*child*) removes *child* from *parentNode* on the DOM and returns reference to *child*

**Altering Elements**

```javascript
const div = document.createElement('div');                     
// create a new div referenced in the variable 'div'

div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white');    
// adds several style rules
```

**Working with classes**

It is often standard (and more clean) to toggle a CSS style rather than adding and removing inline CSS.
```javascript
div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// remove "new" class from div

div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it
```

**Adding Text Content**

```javascript
div.textContent = 'Hello World!'                               
// creates a text node containing "Hello World!" and
// inserts it in div
```

**Adding HTML content**

```javascript
div.innerHTML = '<span>Hello World!</span>';                   
// renders the html inside div
```

### Example of adding a div with text using javascript!

```HTML
<!-- your html file: -->
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container"></div>
</body>
```
```javascript
// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div'); //creates the element of div
content.classList.add('content'); //calls the class 'content'
content.textContent = 'This is the glorious text-content!'; //textContent is what is put inside

container.appendChild(content);
```
```HTML
<!-- The DOM -->
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container">
  	<div class="content">
      This is the glorious text-content!
    </div>
  </div>
</body>
```

**VERY IMPORTANT TO RUN THE JS FILE AFTER THE HTML IS PARSED**

Can use the *defer* keyword which would load the file after the HTML is parsed.

```HTML
<head>
    <script src="js-file.js" defer></script>
</head>
```