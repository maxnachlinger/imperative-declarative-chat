const unfold = (fn) => (initialValue) => {
  const accum = [];
  const stack = [initialValue];

  while (stack.length > 0) {
    const value = stack.pop();
    const {result, next, done} = fn(value) || {done: true};

    if (done) {
      continue;
    }

    accum.push(result);
    stack.push(next);
  }

  return accum;
}

const rangePositive = (start, end) => unfold((x) => x <= end ? {result: x, next: x + 1} : null)(start);

const rangeNegative = (start, end) => unfold((x) => x >= end ? {result: x, next: x - 1} : null)(start);

console.log(
  rangePositive(-2, 2),
  rangeNegative(2, -2)
)
