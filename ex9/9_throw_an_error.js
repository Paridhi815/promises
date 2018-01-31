let parsePromised = (json) => {
  let promise = new Promise((resolve, reject) => {
    try {
      data = (JSON.parse(json));
    } catch (e) {
      reject(e.message);
    }
    resolve('Resolved');
  });
  return promise;
};

let invalidJson = process.argv[2];
parsePromised(invalidJson)
  .then(console.log, console.log);

module.exports = parsePromised;
