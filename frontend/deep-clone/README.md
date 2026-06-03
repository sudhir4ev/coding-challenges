# Deep Clone

A deep clone makes a copy of a JavaScript value such that the copy has no shared references to nested arrays or objects in the original. Mutating the cloned value should never affect the original.

How to deep clone an object in JavaScript
In production code, use the built-in `structuredClone()`:

```ts
const original = { user: { name: 'Ada', tags: ['admin'] } };
const copy = structuredClone(original);

copy.user.tags.push('owner');

console.log(original.user.tags); // ['admin']
console.log(copy.user.tags); // ['admin', 'owner']
```

`structuredClone` is part of the Web Platform spec. It is available in all evergreen browsers, Node.js 17+, and Deno. It correctly handles plain objects and arrays as well as `Date`, `RegExp`, `Map`, `Set`, `ArrayBuffer`, typed arrays, and circular references. None of those work with the older `JSON.parse(JSON.stringify(value))` trick.

#### When `structuredClone` isn't enough
`structuredClone` covers most cases, but it throws a `DataCloneError` for values that cannot be structured-cloned and silently flattens others:

| Input                | Behavior                                                                  |
| -------------------- | ------------------------------------------------------------------------- |
| Functions / methods  | Throws `DataCloneError`.                                                  |
| DOM nodes            | Throws (except via the special `transfer` option for transferable types). |
| Symbol values        | Throws.                                                                   |
| Class instances      | Cloned as plain objects. The prototype is not preserved.                  |
| Getters and setters  | Flattened to data properties on the clone.                                |
| Property descriptors | `enumerable`, `writable`, `configurable` flags are not preserved.         |

If you need to clone any of those, or you need full control over what gets shared versus copied, you'll write your own deepClone. Implementing it from scratch is also one of the most common JavaScript interview questions, because it tests recursion, type detection, and Object traversal in a small surface area.

> "Looking for the conceptual explanation of "shallow vs deep copy"? See the dedicated quiz page: [Explain the difference between shallow copy and deep copy](https://www.greatfrontend.com/questions/quiz/explain-the-difference-between-shallow-copy-and-deep-copy)."

Implement `deepClone(value)` so it returns a deep copy of a JSON-serializable value. The input may be `null`, `booleans`, `numbers`, `strings`, `arrays`, or plain objects. It will not contain cycles or special objects like `Date`, `RegExp`, `Map`, or `Set`. Primitive values can be returned as-is.

### Arguments

`value` _(\*)_: The value to clone.

### Returns

_(\*)_: Returns a deep copy of `value`.

### Examples

```ts
const obj1 = { user: { role: "admin" } };
const clonedObj1 = deepClone(obj1);

clonedObj1.user.role = "guest"; // Change the cloned user's role to 'guest'.
clonedObj1.user.role; // 'guest'
obj1.user.role; // Should still be 'admin'.

const obj2 = { foo: [{ bar: "baz" }] };
const clonedObj2 = deepClone(obj2);

obj2.foo[0].bar = "bax"; // Modify the original object.
obj2.foo[0].bar; // 'bax'
clonedObj2.foo[0].bar; // Should still be 'baz'.
```
