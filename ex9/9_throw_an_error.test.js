let parsePromised = require('./9_throw_an_error');

describe('Return value check:', () => {
  it('Check if it returns a promise:', () => {
    let promise = parsePromised();
    expect(promise).toBeInstanceOf(Promise);
  });
});
describe('Check resolve:', () => {
  it('Check if it rejects a promise if not a JSON object:', () => expect(parsePromised([])).rejects.toBe('Unexpected end of JSON input'));
  it('Check if it rejects a promise if not a JSON object:', () => expect(parsePromised('hello')).rejects.toBe('Unexpected token h in JSON at position 0'));
  it('Check if it resolves a promise if it is a JSON object:', () => expect(parsePromised({})).resolves.toBe('Resolved'));
});
