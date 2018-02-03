const _ = require('lodash');
const reverseD = (...args) => _.isEmpty(args) ? [] : reverseD(..._.tail(args)).concat(_.head(args));

console.log(
  reverseD(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
)
