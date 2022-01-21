const container = document.querySelector('#container');

// Red <p></p>
const red = document.createElement('p');
red.classList.add('red');
red.textContent = "Hey I'm red!";
red.style.cssText = "color: red";
container.appendChild(red);

// Blue <h3></h3>
const blue = document.createElement('h3');
blue.classList.add('blue');
blue.textContent = "I'm a blue h3!";
blue.style.cssText = "color: blue";
container.appendChild(blue);

// div with black border and pink background color
const newDiv = document.createElement('div');
newDiv.classList.add('div-with-p-h1');
newDiv.style.cssText = "border: 5px solid black; background-color: pink";
container.appendChild(newDiv);

const anotherH1 = document.createElement('h1');
const anotherP = document.createElement('p');

anotherH1.textContent = "I'm in a div";
anotherP.textContent = "ME TOO!";
newDiv.appendChild(anotherH1);
newDiv.appendChild(anotherP);




