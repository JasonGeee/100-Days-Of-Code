## Day 5

Writing **Clean Code and Clean Comments** are so important for yourself and the next developer reading your code or you reading someone else's code. Main reason why it is a must is to help readable and understanding without having to ask many questions or even going back to the code and rewriting someone's code.

Reading about writing clean code and comments brings up how important code can come across very easily if it is clean. Some functions don't need explination this just the name of the function or variable.

### Rule of Thumb for Writing Clean Code
    
    1) *Indentation* should be consisten throughout the code.
    2) *Semicolons*, just do it! Keeps code clean without errors (unless using Python3)
    3) *Line Length* should be simple and short. Not too long, or else becomes too heckteck. Clean indentation the same.
    4) *Naming Things*, functions and variables should be descriptive.
        - Functions: **stay with verbs**
        - Variables: **stay with nouns or an adjective(phrase)**

### Knowledge Check for Clean Code

- Why is it important to write clean code?

Important to help readablility and understanding of the code. Otherwise can be too confusing.

- Name 5 clean code principles previously mentioned

    1) Write comments explaining why, Code that can explain how.
    2) Use correct indentation
    3) Revist logic with diagrams or pseudocode
    4) Use standard naming of functions and variables
    5) Avoid large functions

- What is the difference between good comments and bad comments?

Good comments are short and simple that explain why. Gets straight to the point professionally.
Bad comments are too long, unnecessary, and or confusing.

## Onto More Fundamentals of Javascript

### Arrays
Since I do know how arrays work already. What is more important are *Array Methods.* Going to be writing down each array method I come across below.

##### .toString(); and .join(); both join array elements together

1) toString();

```
.toString(); 

/* Converts an array to a string of (comma separated) array values.
Example: */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

/* Banana,Orange,Apple,Mango */
```

2) join();

```
.join();

/* 
joins all array elements into a string, BEHAVES LIKE toString();
but can add specific characters inbetween each array element.

Example:
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));

/* Banana * Orange * Apple * Mango */

```

##### .pop(); and .push();

3) .pop();
**Removes last element of array**

```
.pop();

/* Removes last element of an array */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

/* Mango is removed from array */
```

4) .push();
**Pushes new element at the END OF AN ARRAY**

```
.push();

/* adds a new element to an array AT THE END */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
/* ["Banana", "Orange", "Apple", "Mango", "Kiwi"] */

let length = fruits.push("Kiwi"); // Returns array length!
```

##### Shifiting elements: .shift(); and unshift();

5) .shift();
**method removes the first array element and "shifts" all other elements to a lower index.**
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

/* ["Orange", "Apple", "Mango"] */

let fruit = fruits.shift(); //returns the value that was shifted out
```
6) .unshift();
**adds a new element to an array (at the beginning), and "unshifts" older elements**
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // can also return length if assigned to variable

/* ["Lemon", "Banana", "Orange", "Apple", "Mango"] */
```

##### Changing Elements

7) Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";

//replaces Banana with Kiwi
```

##### Array length

7) .length;
property provides an easy way to append a new element to an array (not the best way though).

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";

/* ["Banana", "Orange", "Apple", "Mango", "Kiwi"] */
```

8) .concat();
**method creates a new array by merging (concatenating) existing arrays:**

method does not change the existing arrays. It always returns a new array.

*Merging Two Arrays*
```
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren);
/* Cecilie,Lone,Emil,Tobias,Linus */
```

*Merging Three Arrays*
```
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

console.log(myChildren);
/* Cecilie,Lone,Emil,Tobias,Linus,Robin,Morgan */
```

*Merging an Array with Values*
```
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 

console.log(myChildren);
/* Emil,Tobias,Linus,Peter */
```

##### Splicing and Slicing Arrays

9) .splice();
**method adds new items to an array.**
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);
/* Banana,Orange,Lemon,Kiwi,Apple,Mango */
```
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

*returns an array with the deleted items*
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let removed = fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(removed);
/* Apple,Mango */
```

*remove elements without leaving "holes" in the array:*
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);

/* ["Orange", "Apple", "Mango"] */
```
The first parameter (0) defines the position where new elements should be added (spliced in).
The second parameter (1) defines how many elements should be removed.
The rest of the parameters are omitted. No new elements will be added.


10) slice();
**method slices out a piece of an array.**
method slices out a piece of an array into a new array.

```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); //starting from "Orange"

console.log(citrus);
/* ["Orange", "Lemon", "Apple", "Mango"] */
```
*The slice() method can take two arguments like slice(1, 3).*
The method then selects elements from the start argument, and up to (but not including) the end argument.

### Loops in JS

1) The for...of loop

```
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}
```
    1) Given the collection cats, get the first item in the collection.
    2) Assign it to the variable cat and then run the code between the curly brackets {}.
    3) Get the next item, and repeat (2) until you've reached the end of the collection.

2) map()
to do something to each item in a collection and create a new collection containing the changed items: