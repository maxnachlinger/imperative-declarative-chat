const _ = require('lodash');

const fold = (fn, acc, input) => _.isEmpty(input) ? acc : fold(fn, fn(acc, _.head(input)), _.tail(input));

const reverseD2 = (...input) => fold((acc, i) => [i].concat(acc), [], input);

console.log(
  reverseD2(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
)