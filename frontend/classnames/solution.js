/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  const self = this;
  let classes = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    // falsy values: null, undefined, false
    if (!arg) continue;

    if (Array.isArray(arg)) {
      const cxNames = classNames.apply(self, arg);
      cxNames && classes.push(cxNames);
      continue;
    }

    switch (typeof arg) {
      case "string":
      case "number":
        classes.push(arg);
        break;

      case "object":
        const cxNames = Object.entries(arg)
          .filter(([_, val]) => Boolean(val))
          .map(([cxName]) => cxName);
        classes = classes.concat(cxNames);
        break;

      case "boolean":
        if (arg) classes.push(arg);
        break;
    }
  }

  return classes.join(" ");
}
