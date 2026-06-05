/**
 * @param {Array<unknown>} iterable
 * @param {(value: unknown) => Promise<unknown>} callbackFn
 * @param {number} [size=Infinity]
 *
 * @return {Promise<Array<unknown>>}
 */
export default async function mapAsyncLimit(iterable, callbackFn, size) {
  const batches = size ? _makeBatches(iterable, size) : [iterable];
  let results = [];

  for (const batch of batches) {
    const batchResults = await Promise.all(
      batch.map((arg) => callbackFn.apply(this, [arg])),
    );
    results = [...results, ...batchResults];
  }

  return results;
}

function _makeBatches(iterable, size) {
  const batches = [];
  for (
    let index = 0, batchIndex = 0;
    index < iterable.length;
    index += size, batchIndex++
  ) {
    const batch = Array.prototype.slice.call(iterable, index, index + size);
    batches[batchIndex] = batch;
  }

  return batches;
}
