'use strict';

let i = 0;
while (i + 1 < 10) {
  i++;
}
console.log(i); // 9


const unfold = require('unfold-with');

const j = unfold(
  (n) => n < 10 ? [n, n + 1] : null, // [current-value, next-value]
  0 // initial-value
)
  .pop();

console.log(j); // 9
