## imperative-declarative-chat
An exploration of some ideas around declarative vs imperative approaches

### Imperative code
Focuses on _how_ you want to do something.

### Declarative code
Focus on _what_ you want to do.

### Example: Extract first name's from an array of people
Our array:
```javascript
const people = [
  {first: 'test-first-0', last: 'test-last-0'},
  {first: 'test-first-1', last: 'test-last-1'},
  {first: 'test-first-2', last: 'test-last-2'},
  {first: 'test-first-3', last: 'test-last-3'},
  {first: 'test-first-4', last: 'test-last-4'}
];
```
Imperative:
```javascript
const getFirstNamesI = (input) => {
  const firstNames = [];
  for (let i = 0, c = input.length; i < c; i++) {
    firstNames[i] = input[i].first;
  }
  return firstNames;
}
```
Declarative:
```javascript
const getFirstNamesI = (input) => input.map((p) => p.first);
```
