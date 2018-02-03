// for fun, but v8 doesn't have tail-call optimization, so don't use this
const unfold = (fn, initialIndex) => {
  const go = (f, index, acc) => {
    const {result, next, done} = f(index) || {done: true};
    return done ? acc : go(f, next, acc.concat(result));
  }
  return go(fn, initialIndex, []);
}

const range = (start, end) => unfold((x) => x <= end ? ({result: x, next: x + 1, done: false}) : null, start);

console.log(
  range(0, 9)
)
