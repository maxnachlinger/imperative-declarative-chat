// pretty slow
function* unfoldWith (fn, initialValue) {
  let {next, value, done = false} = fn(initialValue);

  while (!done) {
    yield value;
    ({next, value, done = false} = fn(next));
  }
}

const range = (start, end) => unfoldWith((x) => x <= end ? {value: x, next: x + 1} : {done: true}, start);

console.log(
  [].concat(...range(5, 10))
)
