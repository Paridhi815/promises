let promiseReject = Promise.reject(new Error('error'));
let promiseResolve = new Promise(((resolve, reject) => {
  resolve('SECRET VALUE');
}));

promiseResolve.then(msg => console.log(msg));

promiseReject.catch((error) => {
  console.log(error.message);
});

module.exports = {
  promiseReject,
  promiseResolve,
};
