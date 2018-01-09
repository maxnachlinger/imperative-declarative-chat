## imperative-declarative-chat
An exploration of some ideas around declarative vs imperative approaches

### Imperative code
Focuses on _how_ you want to do something.

### Declarative code
Focus on _what_ you want to do.

### Example: Extract first name's from an array of people, ignore people missing first names
Our array:
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
Imperative:
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
- Sanity check input
- Create a new `firstNames` array to hold our result
- Declare and initialize a simple variable `i` to hold our array index
- Declare and initialize a variable to cache the input array's length
- As we iterate in our `for` loop
  - if a person object is truthy has a value for the `first` property, place that value into our resulting array
- return our result array

Declarative:
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
- Sanity check input
- Filter out people which are are falsy or do not have first first names
- Create an array of first names

Consider the above using lodash:
```javascript
const _ = require('lodash');

const getFirstNamesL = (people = []) => {
  return _.map(
    _.filter(people, (person) => person && person.first),
    ({first}) => first
  );
};

```
- Note: _.filter and _.map handles bad input
- This approach is even less to do with "how" we accomplish our goal.

Things you already know - but I'm reviewing so you can feel smart:
filter -
map -
reduce -
forEach - this is reserved for side effects. You're not projecting a list like map or filtering a list
