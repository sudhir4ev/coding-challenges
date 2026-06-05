/**
 * @template TResult
 * @param {(...args: Array<unknown>) => void} func
 * @returns {(...args: Array<unknown>) => Promise<TResult>}
 */
export default function promisify(func) {
  const promisifiedFn = function (...args) {
    return new Promise((resolve, reject) => {
      func.apply(this, [
        ...args,
        (error, res) => {
          if (error != null) reject(error);
          else resolve(res);
        },
      ]);
    });
  };

  Object.defineProperty(promisifiedFn, "name", {
    value: `${func.name + "_" || ""}promisified`,
    configurable: true,
  });

  return promisifiedFn;
}
