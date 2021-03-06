const _ = require('lodash');

// v8 is not tail call optimized, don't use this
const sumD = (...numbers) => _.isEmpty(numbers) ? 0 : _.head(numbers) + sumD(..._.tail(numbers));

console.log(
  sumD(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
)
