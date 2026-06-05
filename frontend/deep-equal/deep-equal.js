/**
 * @param {unknown} valueA
 * @param {unknown} valueB
 * @returns {boolean}
 */
export default function deepEqual(valueA, valueB) {
  if (valueA === null || valueB === null) {
    if (valueA === null && valueB === null) return true;
    return false;
  }

  const typeA = _getType(valueA);
  const typeB = _getType(valueB);

  if (typeA != typeB) return false;

  if (typeA == "boolean" || typeA == "string" || typeA == "number") {
    return valueA === valueB;
  }

  if (typeA === "array") {
    return valueA.every((itemA, index) => deepEqual(itemA, valueB[index]));
  }

  if (typeA == "object") {
    const entriesA = Object.entries(valueA);
    const entriesB = Object.entries(valueB);

    if (entriesA.length !== entriesB.length) return false;

    console.info(valueA, valueB);

    for (let i = 0; i < entriesA.length; i++) {
      const [key, valA] = entriesA[i];
      const valB = valueB[key];
      console.log(valA, valB);
      if (!deepEqual(valA, valB)) return false;
    }
    return true;
  }
}

function _getType(val) {
  if (val === null) return null;

  switch (typeof val) {
    case "boolean":
    case "string":
    case "number":
      return typeof val;
  }

  if (Array.isArray(val)) return "array";
  if (val instanceof Object) return "object";
}
