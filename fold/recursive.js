const _ = require('lodash');

// v8 is not tail call optimized, don't use this
const fold = (fn, acc, input) => _.isEmpty(input) ? acc : fold(fn, fn(acc, _.head(input)), _.tail(input));

const reverse = (...input) => fold((acc, i) => [i].concat(acc), [], input);

const sum = (...input) => fold((acc, i) => acc + i, 0, input);

console.log(
  reverse(0, 1, 2, 3, 4, 5, 6, 7, 8, 9),
  sum(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
)
