let async = require('./8_values_and_promises');

describe('Validation of values and promises:', () => {
  test('Validation for concatenation with doctor :', () => expect(async.attachTitle('Pari')).toBe('DR. Pari'));
  test('Validation for promise creation:', () => expect(async.promise).resolves.toBe('MANHATTAN'));
  test('Validation for chained promises:', () => expect(async.promise.then(async.attachTitle)).resolves.toBe('DR. MANHATTAN'));
});
