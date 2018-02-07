'use strict'

// imperative
let i = 0;
while (i + 1 < 10) {
  i++;
}
console.log(i); // 9

// declarative
const unfold = require('unfold-with');

const j = unfold((n) => n < 10 ? [n, n + 1] : null, 0).pop();
console.log(j); // 9
