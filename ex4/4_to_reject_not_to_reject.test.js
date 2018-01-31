let promise = require('./4_to_reject_not_to_reject');

describe('Validate the simulation of the promise state:', () => {
  it('Validation for fulfill:', () => expect(promise).resolves.toBe('I FIRED'));
  it('Validation for reject:', () => expect(promise).rejects.toBe(null));
});
