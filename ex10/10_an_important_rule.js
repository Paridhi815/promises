function iterate(num) {
  console.log(num);
  return num + 1;
}

function alwaysThrows() {
  throw new Error('OH NOES');
}

module.exports = {
  iterate,
  alwaysThrows,
};
