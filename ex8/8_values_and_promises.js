
let attachTitle = string => `DR. ${string}`;

let promise = new Promise(((resolve) => {
  resolve('MANHATTAN');
}));

promise.then(attachTitle)
  .then(console.log);

module.exports = { promise, attachTitle };
