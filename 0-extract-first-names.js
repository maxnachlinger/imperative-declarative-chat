const _ = require('lodash');

const awfulInput = [
  {first: 'test-first-0', last: 'test-last-0'},
  {last: 'bad-data-0'},
  {first: null, last: 'test-last-1'},
  null,
  {first: undefined, last: 'test-last-2'},
  undefined
];

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

const getFirstNamesD = (people = []) => {
  if (!Array.isArray(people)) {
    return [];
  }
  return people
    .filter((person) => person && person.first)
    .map(({first}) => first);
};

const getFirstNamesD2 = (people = []) => {
  return _.map(
    _.filter(people, (person) => person && person.first),
    ({first}) => first
  );
};

console.log(
  getFirstNamesI(awfulInput),
  getFirstNamesD(awfulInput),
  getFirstNamesD2(awfulInput)
);
