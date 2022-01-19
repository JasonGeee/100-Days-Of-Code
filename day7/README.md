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