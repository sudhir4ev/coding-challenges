/**
 * @param {(arg: unknown) => unknown} func
 * @returns {(arg: unknown) => unknown}
 */
export default function memoize(func) {
  const cache = new Map();
  function memoisedFn(...args) {
    const cacheKey = JSON.stringify(args);
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    const res = func.apply(this, args);
    cache.set(cacheKey, res);
    return res;
  }
  return memoisedFn;
}
