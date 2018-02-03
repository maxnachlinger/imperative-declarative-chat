const reverseD = (...args) => args.reduce((accum, i) => [i].concat(accum), []);

console.log(
  reverseD(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
)
