/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length == 0) {
      resolve([]);
      return;
    }

    const iterablePromiseResults = new Array(iterable.length);
    let unresolved = iterable.length;

    iterable.forEach((promiseLike, index) => {
      Promise.resolve(promiseLike)
        .then((res) => {
          iterablePromiseResults[index] = res;
          unresolved -= 1;

          // All promise resolved
          if (unresolved == 0) {
            resolve(iterablePromiseResults);
          }
        })
        .catch((err) => {
          unresolved -= 1;
          iterablePromiseResults[index] = err;
          reject(err);
        });
    });
  });
}
