let promise = require('./7_promise_after_promise');

describe('Validate the simulation of the promise state:', () => {
  test('Validation for 1st fulfill:', () => expect(promise.first()).resolves.toBe('SECRET'));
  test('Validation for 2nd fulfill:', () => expect(promise.second('test')).resolves.toBe('test'));
  test('Validation for chained fulfill:', () => expect(promise.first().then(promise.second)).resolves.toBe('SECRET'));
});


// first returns hello
// second returns world
// good test case cz it checks the order of execution if it prints hello world
