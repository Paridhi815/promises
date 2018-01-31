
let onReject = (error) => {
  if (error === null || error === undefined) { return false; }
  console.log(error.message);
  return true;
};

let promise = new Promise((fulfill, reject) => {
  let err = new Error('REJECTED!');
  setTimeout(() =>
    reject(err), 300);
});
promise.then(null, onReject);
module.exports = { promise, onReject };
