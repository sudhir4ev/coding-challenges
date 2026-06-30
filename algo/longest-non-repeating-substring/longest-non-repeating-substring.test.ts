import longestNonRepeatingSubstring from './longest-non-repeating-substring';
import submitTestCases from './submit.tests.json';

describe('longestNonRepeatingSubstring', () => {
  (submitTestCases as any[]).forEach((example: any) => {
    test(`str = "${example.input[0][1]}"`, () => {
      expect(longestNonRepeatingSubstring(example.input[0][1])).toStrictEqual(
        example.output,
      );
    });
  });
});
