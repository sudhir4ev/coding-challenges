/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  if (!iterable || iterable.length == 0) throw new AggregateError(iterable);

  const promisesArr = iterable.map((promiseLike) =>
    Promise.resolve(promiseLike),
  );

  const failedPromiseResults = [];
  let failedCount = 0;

  return new Promise((resolve, reject) => {
    promisesArr.forEach((promise, index) =>
      promise
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          failedPromiseResults[index] = err;
          failedCount++;
          if (failedCount === iterable.length)
            reject(new AggregateError(failedPromiseResults));
        }),
    );
  });
}
