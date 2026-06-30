import countIslands from './grid-count-islands';
import submitTestCases from './submit.tests.json';

describe('countIslands', () => {
  (submitTestCases as any[]).forEach((example: any) => {
    test(`grid = ${JSON.stringify(example.input[0][1])}`, () => {
      // Deep clone the grid since DFS solutions often mutate it
      const grid = JSON.parse(JSON.stringify(example.input[0][1]));
      expect(countIslands(grid)).toStrictEqual(example.output);
    });
  });
});
