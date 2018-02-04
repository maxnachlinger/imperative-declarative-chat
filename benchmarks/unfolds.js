const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

// add tests
suite
  .add('unfold: while / stack', () => {
    const unfold = (fn, initialValue) => {
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

    const rangePositive = (start, end) => unfold((x) => x <= end ? {result: x, next: x + 1} : null, start);

    rangePositive(-100, 100);
  })
  .add('unfold: while / stack early return', () => {
    const unfold = (fn, initialValue) => {
      const accum = [];
      const stack = [initialValue];

      while (stack.length > 0) {
        const value = stack.pop();
        const {result, next, done} = fn(value) || {done: true};

        if (done) {
          return accum;
        }

        accum.push(result);
        stack.push(next);
      }
    }

    const rangePositive = (start, end) => unfold((x) => x <= end ? {result: x, next: x + 1} : null, start);

    rangePositive(-100, 100);
  })
  .add('unfold: while / stack early return - len', () => {
    const unfold = (fn, initialValue) => {
      const accum = [];
      const stack = [initialValue];
      let len = stack.length;

      while (len > 0) {
        const value = stack.pop();
        const {result, next, done} = fn(value) || {done: true};

        if (done) {
          return accum;
        }

        accum.push(result);
        len = stack.push(next);
      }
    }

    const rangePositive = (start, end) => unfold((x) => x <= end ? {result: x, next: x + 1} : null, start);

    rangePositive(-100, 100);
  })
  .add('unfold: while / stack early return - len, no destructure', () => {
    const unfold = (fn, initialValue) => {
      const accum = [];
      const stack = [initialValue];
      let len = stack.length;

      while (len > 0) {
        const result = fn(stack.pop()) || {done: true};

        if (result.done) {
          return accum;
        }

        accum.push(result.result);
        len = stack.push(result.next);
      }
    }

    const rangePositive = (start, end) => unfold((x) => x <= end ? {result: x, next: x + 1} : null, start);

    rangePositive(-100, 100);
  })
  .add('unfold: while / stack early return - len, no destructure, while true', () => {
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

    rangePositive(-100, 100);
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({'async': true});