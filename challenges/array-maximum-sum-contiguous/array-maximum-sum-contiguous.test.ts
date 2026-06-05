import maxSumSubArray from './array-maximum-sum-contiguous';
import submitTestCases from './test.json';

console.log(submitTestCases)

describe('maxSumSubArray', () => {
  (submitTestCases as any[]).forEach((example: any) => {
    test(`numbers = [${example.input[0][1]}]`, () => {
      expect(maxSumSubArray(example.input[0][1])).toStrictEqual(example.output);
    });
  });
});