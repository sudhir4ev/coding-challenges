/**
 * @param {(this: any, ...args: Array<unknown>) => unknown} func
 * @param {number} wait
 * @returns {(this: any, ...args: Array<unknown>) => unknown}
 */
export default function throttle(func, wait) {
  let timerId;

  return function (...args) {
    const self = this;
    
    if (!timerId) {
      const res = func.apply(self, args)
      timerId = setTimeout(() => {
        timerId = null
      }, wait)
      return res
    }
  }
}
