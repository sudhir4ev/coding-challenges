/**
 * @param {Object} obj
 * @return {Object}
 */
export default function squashObject(obj) {
  let resultObj = {};

  Object.entries(obj).forEach(([key, val]) => {
    if (!hasChildren(val)) {
      resultObj[key] = val;
      return;
    }

    const childObjects = {};

    if (Array.isArray(val)) {
      val.forEach((childItem, index) => {
        childObjects[getKey(`${index}`, key)] = childItem;
      });
    } else {
      Object.entries(val).forEach(([childKey, childVal]) => {
        childObjects[getKey(childKey, key)] = childVal;
      });
    }

    resultObj = {
      ...resultObj,
      ...squashObject(childObjects),
    };
  });

  return resultObj;
}

function hasChildren(val) {
  if (
    ["string", "boolean", "number", "symbol", "function"].includes(typeof val)
  ) {
    return false;
  }
  if (Array.isArray(val)) return true;

  if (val == null) return false;

  return typeof val == "object";
}

function getKey(key, ...parentKeys) {
  return [...parentKeys, key].filter(Boolean).join(".");
}
