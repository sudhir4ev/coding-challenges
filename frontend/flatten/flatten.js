/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  let res = [];

  if (!Array.isArray(value)) {
    return res;
  }

  for (let i = 0; i < value.length; i++) {
    const item = value[i];

    if (!Array.isArray(item)) {
      res.push(item);
    } else {
      const childItems = flatten(item);
      res = [...res, ...childItems];
    }
  }

  return res;
}
