## Day 6

Active Learning: Launch Countdown in this [link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_launch_countdown) at bottom of page!

Practicing some more arrays and loops!

##### Summary of Loops

- **while** – The condition is checked before each iteration.
- **do..while** – The condition is checked after each iteration.
- **for (;;)** – The condition is checked before each iteration, additional settings available.

To make an “infinite” loop, usually the **while(true)** construct is used. Such a loop, just like any other, can be stopped with the **break** directive.

If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the **continue** directive.

**break/continue** support **labels** before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.
```
label: (for or while here if wanted) {
  // ...
  break label; // works
  // ...
}
```

Doing the Practice Problems below [here](https://javascript.info/while-for)
