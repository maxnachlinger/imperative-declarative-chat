const reverse = (...args) => args.reduce((accum, i) => [i].concat(accum), []);

const reverseLessMemory = (...args) => args.reduce((accum, i) => {
  accum.unshift(i);
  return accum;
}, []);

const sum = (...numbers) => numbers.reduce((sum, i) => sum + i, 0);

console.log(
  sum(0, 1, 2, 3, 4, 5, 6, 7, 8, 9),
  reverse(0, 1, 2, 3, 4, 5, 6, 7, 8, 9),
  reverseLessMemory(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
)
