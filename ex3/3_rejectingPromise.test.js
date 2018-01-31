let promise = require('./3_rejectingPromise');

describe('Validate the simulation of the promise state:', () => {
  it('Validation for fulfill:', () => {
    expect(promise).resolves.toBe('pari');
  });
  it('Validation for reject:', () => {
    expect(promise).rejects.toBe('error');
  });
  it('testCase 3 for checking onReject when fullfil', () => {
    (global.console.log) = jest.fn();
    promise.onReject('hello');
    expect((console.log)).toHaveBeenCalledTimes(1);
  });
  it('testCase 4 for checking onReject when reject', () => {
    (global.console.log) = jest.fn();
    promise.onReject(new Error('kk'));
    expect((console.log)).toHaveBeenCalledTimes(1);
  });
  it('testCase 5 for checking onReject message checking', () => {
    expect(promise.onReject(null)).toBe(false);
  });
});

// describe('What the function returns:', () => {
//   it('Must return "REJECTED!"', () => {
//     expect(promise).resolves.toBe('pari');
//   });
//   it('Validation for reject:', () => {
//     expect(promise).rejects.toBe('error');
//   });
// });
