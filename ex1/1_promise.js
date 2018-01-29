const validateInput = (input) => {
  if ((input === null) || (input === undefined)) {
    console.log(`Err1: ${input} args supplied!`);
    return false;
  }
  return true;
};

const print = (msg) => {
  console.log(msg);
};

const asyncLog = (input) => {
  if (!validateInput(input)) {
    return false;
  }
  setTimeout(print, 300, input);
  return true;
};

asyncLog('TIMED OUT!');

module.exports = {
  asyncLog,
  print,
};
