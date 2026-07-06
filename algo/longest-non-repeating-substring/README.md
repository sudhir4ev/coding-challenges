# Longest Non-repeating Substring

`#Medium` `#45mins`

Given a string `str`, determine the length of the longest substring that does not contain any repeating characters.

A **substring** is any contiguous sequence of characters within a string.

### Input

- `str: string`: A string

### Examples

```
Input: str = "abcdefg"
Output: 7
Explanation: The entire string has no repeating characters
```

```
Input: str = "dvdf"
Output: 3
Explanation: Longest substring without repeating characters is "vdf"
```

```
Input: str = "aabbccdde"
Output: 2
Explanation: Longest substrings are "ab", "bc", "cd", "de" — each length 2
```

### Constraints

- 0 <= `str.length` <= 10,000
- `str` contains only lowercase English letters

### Source

- [GreatFrontEnd](https://www.greatfrontend.com/questions/algo/longest-non-repeating-substring?format=algo)
- [LeetCode 3 — Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
