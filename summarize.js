const _ = require('lodash');

const testInput = [
  {first: 'test-first-0', last: 'test-last-0'},
  {first: 'test-first-1', last: 'test-last-1'},
  {first: 'test-first-2', last: 'test-last-2'},
  {first: 'test-first-2', last: 'test-last-3'},
  {first: 'test-first-2', last: 'test-last-2'}
];

// imperatively
const getNameMetricsI = (input) => {
  const ret = {};
  for (let i = 0; i < input.length; i++) {
    const { first, last } = input[i];
    ret[last] = (ret[last] || 0) + 1;
    ret[first] = (ret[first] || 0) + 1;
  }
  return ret;
}

// declarativly
const getNameMetricsD = (input) => input.reduce((accum, { first, last }) => ({
  ...accum,
  [last]: (accum[last] || 0) + 1,
  [first]: (accum[first] || 0) + 1
}), {});

// hmm - how to classify this?
const getNameMetricsU = (input) => {
  const ret = {};
  _.forEach(input, ({last, first}) => {
    ret[last] = (ret[last] || 0) + 1;
    ret[first] = (ret[first] || 0) + 1;
  });
  return ret;
}


console.log(getNameMetricsI(testInput));
console.log(getNameMetricsD(testInput));
console.log(getNameMetricsU(testInput));
