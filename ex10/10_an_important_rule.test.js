let tester = require('./10_an_important_rule');

describe('Return value check:', () => {
  it('Check if it iterate returna argument +1:', () => {
    expect(typeof tester(5)).toBe('number');
  });
});
