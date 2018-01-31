let promise = require('./shortcuts');

describe('Validate the simulation of the promise state:', () => {
  test('Validation for fulfill:', () => expect(promise.promiseResolve).resolves.toBe('SECRET VALUE'));
  test('Validation for reject:', () => expect(promise.promiseReject).rejects.toEqual(new Error('error')));
});
