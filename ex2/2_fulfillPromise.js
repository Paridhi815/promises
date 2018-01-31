
let promise = new Promise((fulfill) => {
  setTimeout(() => {
    fulfill('FULFILLED!');
  }, 300);
});

// Add a handler to the promise’s fulfillment. `console.log` will be called
// with the value passed to `fulfill`, which is `'FULFILLED!'`.
// Note that this statement will ALWAYS be executed before `fulfill` is
// called (we'll talk about this in depth in the lessons to come).

promise.then(msg => console.log(msg));

module.exports = promise;
