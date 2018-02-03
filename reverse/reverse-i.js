const reverseI = (...args) => {
  const result = [];
  for (let i = args.length-1, j = 0; i >= 0; i--, j++) {
    result[j] = args[i];
  }
  return result;
}
console.log(
  reverseI(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
)
