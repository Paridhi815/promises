let tester = require('./10_an_important_rule');

describe('Return value check:', () => {
  it('Check if it iterate returna argument +1:', () => {
    expect(typeof tester.iterate(5)).toBe('number');
  });

  it('Check if it alwaysThrows function throws an error a:', () => {
    expect(tester.alwaysThrows).toThrow('OH NOES');
  });
});

describe('Check if promise resolves only once:', () => {
  it('Check for resolve:', () => expect(tester.prom).rejects.toThrow('OH NOES'));
});
