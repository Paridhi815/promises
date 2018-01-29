const tester = require('./1_promise');

describe('Argument Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(tester.asyncLog(null)).toBe(false);
  });

  test('Should not work for undefined args: ', () => {
    expect(tester.asyncLog(undefined)).toBe(false);
  });
});

describe('Functionality of setTimeout: ', () => {
  jest.useFakeTimers();
  tester.asyncLog('TIMED OUT!');
  test('Should be called for 1 time(s): ', () => {
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  test('Should be called with \'TIMED OUT\': ', () => {
    expect(setTimeout).toHaveBeenCalledWith(tester.print, 300, 'TIMED OUT!');
  });
});
