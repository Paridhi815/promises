let promise = require('./5_always_asynchonous');

describe('Validate the simulation of the promise state:', () => {
  test('Validation for fulfill:', () => expect(promise).resolves.toBe('PROMISE VALUE'));
  test('Validation for reject:', () => expect(promise).rejects.toBe(null));
});
