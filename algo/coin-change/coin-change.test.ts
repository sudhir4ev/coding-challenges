import coinChange from './coin-change';
import submitTestCases from './submit.tests.json';

describe('coinChange', () => {
  (submitTestCases as any[]).forEach((example: any) => {
    test(`coins = [${example.input[0][1]}], target = ${example.input[1][1]}`, () => {
      expect(coinChange(example.input[0][1], example.input[1][1])).toStrictEqual(
        example.output,
      );
    });
  });
});
