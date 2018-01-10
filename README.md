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
- Giving JS a funciton to use to project the resulting array of first names 

#### A (more) Declarative solution:
We can even drop the initial data check if we use lodash (`_.filter` and `_.map` handle bad input):
```javascript
const getFirstNamesL = (people = []) => {
  return _.map(
    _.filter(people, (person) => person && person.first),
    ({first}) => first
  );
};
```
Now we're simply:
- Giving JS a function to use to filter out invalid people
- Giving JS a funciton to use to project the resulting array of first names 

TODO --- clean up below here

### Some original and stolen examples of imperative vs declarative appraches
- TODO

### The Varieties of Religious Experience:
Dogma 1:
The bottleneck isn't going to be this, really. I can think of exactly 1 instance at Walmart where something like a loop was a bottleneck (in memory log filtering in a stream of tons of logs). The slowest part of anything I've written aside from that was spent waiting for a response from an upstream service or from a database. YAGNI

Dogma 2:
OMG Declarative Good, Imperative Bad. Sheesh as if things were that simple.


### Declarative notes:
- In JavaScript, declarative code almost always depends upon abstractions which use imperative code.

_.filter and _.map handle bad input

TODO ---

### Imperative Bad, Declarative Good?
You're kidding right :) 

Things you already know - but I'm reviewing so you can feel smart:
filter -
map -
reduce -
forEach - this is reserved for side effects. You're not projecting a list like map or filtering a list
