/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
  const isPrimitive =
    typeof value == "string" ||
    typeof value == "boolean" ||
    typeof value == "number";

  // return primitive values, functions as-is
  if (
    isPrimitive ||
    typeof value == "function" ||
    value == null ||
    value == undefined
  )
    return value;

  // Array type
  if (Array.isArray(value)) {
    return value.map(deepClone);
  }

  // Object
  if (typeof value == "object") {
    return Object.entries(value).reduce((clonedObj, [key, childValue]) => {
      clonedObj[key] = deepClone(childValue);
      return clonedObj;
    }, Object.getPrototypeOf(value));
  }

  return value
}
