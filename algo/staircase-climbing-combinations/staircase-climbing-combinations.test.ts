import stairClimbingCombinations from './staircase-climbing-combinations';
import submitTestCases from './submit.tests.json';

describe('stairClimbingCombinations', () => {
  (submitTestCases as any[]).forEach((example: any) => {
    test(`steps = ${example.input[0][1]}`, () => {
      expect(stairClimbingCombinations(example.input[0][1])).toStrictEqual(
        example.output,
      );
    });
  });
});
