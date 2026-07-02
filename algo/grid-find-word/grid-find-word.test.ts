import findWordInGrid from './grid-find-word';
import submitTestCases from './submit.tests.json';

describe('findWordInGrid', () => {
  (submitTestCases as any[]).forEach((example: any) => {
    test(`grid = ${JSON.stringify(example.input[0][1], null, 2)} target = ${
      example.input[1][1]
    }`, () => {
      // Deep clone the board since backtracking solutions often mutate it
      const board = JSON.parse(JSON.stringify(example.input[0][1]));
      expect(findWordInGrid(board, example.input[1][1])).toStrictEqual(
        example.output,
      );
    });
  });
});
