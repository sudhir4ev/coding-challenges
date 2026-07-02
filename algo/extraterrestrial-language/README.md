# Extraterrestrial Language

`#Hard` `#55mins` `#Graphs` `#TopologicalSort`

An extraterrestrial language uses the English alphabet, but the letter order is unknown. A list of strings `words` is provided, which represents words from the extraterrestrial language's dictionary, and it is claimed that these words are sorted according to the new language's [lexicographical order](https://en.wikipedia.org/wiki/Lexicographic_order).

If this claim is false, and the arrangement of strings in `words` cannot match any possible letter order, return an empty string. Otherwise, return a string containing the unique letters of the extraterrestrial language sorted according to the language's rules. If multiple valid solutions exist, any of them are acceptable.

### Input

- `words: string[]`: An array of strings where each string is a word in the extraterrestrial language

### Examples

```
Input: words = ["cab","abc","bca"]
Output: "cab"
Explanation: Comparing 'cab' and 'abc', the first differing characters are c and a, suggesting c comes before a. Comparing 'abc' and 'bca', the first differing characters are a and b, so a comes before b. Thus, the order of letters in the new alphabet is 'cab'.
```

```
Input: words = ["abc","ab"]
Output: ""
Explanation: The list is invalid because 'ab' should not come before 'abc'. A shorter word with the same prefix cannot appear after a longer word, so the sequence is impossible, and the result is an empty string.
```

```
Input: words = ["z","x","z"]
Output: ""
Explanation: The sequence is invalid because 'z' appears both before and after 'x', which creates a contradiction in the order. This inconsistency makes it impossible to deduce a valid letter order, so the result is an empty string.
```

### Constraints

- 1 <= `words.length` <= 100
- 1 <= `words[i].length` <= 10
- `words[i]` consists of only lowercase English letters

### Source

- [GreatFrontEnd](https://www.greatfrontend.com/questions/algo/extraterrestrial-language?format=algo)
- [LeetCode 269 — Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)
