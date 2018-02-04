const unfold = (fn, initialValue) => {
  const accum = [];
  const stack = [initialValue];

  while (true) {
    const result = fn(stack.pop()) || {done: true};

    if (result.done) {
      return accum;
    }

    accum.push(result.result);
    stack.push(result.next);
  }
}

const rangePositive = (start, end) => unfold((x) => x <= end ? {result: x, next: x + 1} : null, start);

const rangeNegative = (start, end) => unfold((x) => x >= end ? {result: x, next: x - 1} : null, start);

console.log(
  rangePositive(-2, 2),
  rangeNegative(2, -2)
)
