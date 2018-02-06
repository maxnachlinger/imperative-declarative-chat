## imperative-declarative-chat
An exploration of some ideas around declarative vs imperative approaches

### Imperative code
Focuses on _how_ you want to do something.

### Declarative code
Focus on _what_ you want to do.

### Example: Extract first name's from an array of people, ignore people missing first names
Our array of awful input data:
```javascript
const awfulInput = [
  {first: 'test-first-0', last: 'test-last-0'},
  {last: 'bad-data-0'},
  {first: null, last: 'test-last-1'},
  null,
  {first: undefined, last: 'test-last-2'},
  undefined
];
```
#### An Imperative solution:
```javascript
const getFirstNamesI = (people = []) => {
  const firstNames = [];
  if (!Array.isArray(people)) {
    return firstNames;
  }

  for (let i = 0, c = people.length; i < c; i++) {
    const person = people[i];
    if (person && person.first) {
      firstNames.push(person.first);
    }
  }
  return firstNames;
};
```
This solution is heavily focused on _how_ we're going to arrive at an array of first names. Consider that we're:
- Telling JS how we'd like to sanity check the input - making sure it's an array type in this case
- Creating a new `firstNames` array to hold our result
- Declaring and initializing simple variables for iteration and caching the input array's length
- Telling JS exactly how we'd like to iterate - via a `for` loop in this case
- As we iterate we ensure that each person must exist and have a `first` property
- We then tell JS to place valid people into our `firstNames` results array
- We then return our `firstNames` results array

#### A Declarative solution:
```javascript
const getFirstNamesD = (people = []) => {
  if (!Array.isArray(people)) {
    return [];
  }
  return people
    .filter((person) => person && person.first)
    .map(({first}) => first);
};
```
This solution is more focused on _what_ we'd like to achieve rather than _how_ we'll achieve it, consider that we're:
- Telling JS how we'd like to sanity check the input - making sure it's an array type in this case
- Giving JS a function to use to filter out invalid people
- Giving JS a function to use to project the resulting array of first names 

#### A (more) Declarative solution:
We can even drop the initial data check if we use lodash (`_.filter` and `_.map` handle bad input):
```javascript
const _ = require('lodash');

const getFirstNamesD2 = (people = []) => {
  return _.map(
    _.filter(people, (person) => person && person.first),
    ({first}) => first
  );
};
```
Now we're simply:
- Giving JS a function to use to filter out invalid people
- Giving JS a function to use to project the resulting array of first names 

### Declarative notes:
- Declarative code almost always depends upon abstractions which use imperative code.

### More examples:
Extract the first person with the last name 'test-last-2' and return them: 
```javascript
const _ = require('lodash');

const testInput = [
  {id: 1, first: 'test-first-0', last: 'test-last-0'},
  {id: 2, first: 'test-first-1', last: 'test-last-1'},
  {id: 3, first: 'test-first-2', last: 'test-last-2'},
  {id: 4, first: 'test-first-2', last: 'test-last-3'},
  {id: 5, first: 'test-first-2', last: 'test-last-2'}
];

// imperatively
const getPersonI = (input) => {
  for (let i = 0; i < input.length; i++) {
    const person = input[i];
    if (person.last === 'test-last-2') {
      return person;
    }
  }
  return null;
}

// declaratively
const getPersonD = (input) => input.find((person) => person.last === 'test-last-2');

// how do you classify this?
// quoting the lodash _.foreach docs:
//  Iteratee functions may exit iteration early by explicitly returning false.

const getPersonU = (input) => {
  let ret = null;
  _.forEach(input, (person) => {
    if (person.last === 'test-last-2') {
      ret = person;
      return false;
    }
  });
  return ret;
}

console.log(
  getPersonI(testInput),
  getPersonD(testInput),
  getPersonU(testInput)
);
```
