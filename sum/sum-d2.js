const _ = require('lodash');

const fold = (fn, acc, input) => _.isEmpty(input) ? acc : fold(fn, fn(acc, _.head(input)), _.tail(input));

const sumD2 = (...input) => fold((acc, i) => acc + i, 0, input);

console.log(
  sumD2(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
)
