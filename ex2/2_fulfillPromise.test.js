let promise = require('./2_fulfillPromise');

describe('Validate the simulation of the promise state:', () => {
  it('Validation for fulfill:', () => {
    expect(promise).resolves.toBe('pari');
  });
  it('Validation for reject:', () => {
    expect(promise).rejects.toBe('error');
  });
});
