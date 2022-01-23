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