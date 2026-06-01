/**
 * @param {(this: any, ...args: Array<unknown>) => unknown} func
 * @param {number} wait
 * @returns {(this: any, ...args: Array<unknown>) => unknown}
 */
export default function throttle(func, wait) {
  let timerId;

  return function (...args) {
    
    if (!timerId) {
      const res = func.apply(this, args)
      timerId = setTimeout(() => {
        timerId = null
      }, wait)
      return res
    }
  }
}
