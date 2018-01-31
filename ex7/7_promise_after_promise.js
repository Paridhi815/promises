
function onFulfilled(response) {
  console.log(response);
}

// function first() {
//   return new Promise((res, rej) => {
//     res('SECRET');
//   });
// }
//
// function second(data) {
//   return new Promise((res, rej) => {
//     res(data);
//   });
// }

first()
  .then(second)
  .then(console.log);

module.exports = { first, second };

// let firstPromise = first();
//
// let secondPromise = firstPromise.then(val => second(val));
//
// secondPromise.then(console.log);

// let first = () => console.log('shubham');
