/**
 * @param {any} val
 * @param {Array<string>} keys
 * @returns any
 */
export default function deepOmit(val, keys) {
  if (!keys) return val;

  if (Array.isArray(val)) {
    return val.map((item) => {
      if (item == null || isLiteral(item)) {
        return item;
      }
      if (Array.isArray(item) || typeof item == "object") {
        return deepOmit(item, keys);
      }
    });
  }

  if (!isLiteral(val) && val != null) {
    const result = {};
    Object.entries(val).forEach(([key, childVal]) => {
      if (keys.includes(key)) return;

      const isNull = childVal == null;
      if (isNull) {
        result[key] = childVal;
      }

      const hasChildren = !isLiteral(childVal) || Array.isArray(childVal);

      if (hasChildren) {
        result[key] = deepOmit(childVal, keys);
        return;
      }

      result[key] = childVal;
    });
    return result;
  }
}

function isLiteral(val) {
  return ["string", "boolean", "number", "symbol", "function"].includes(
    typeof val,
  );
}
