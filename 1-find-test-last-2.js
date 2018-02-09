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
// "Iteratee functions may exit iteration early by explicitly returning false."

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
