# Bit Reversal

`#Easy` `#25mins` `#Bitwise`

Implement a function that reverses the bit order of a given 32-bit unsigned integer and returns its corresponding decimal representation.

### Input

- `n: number`: An integer

### Examples

```
Input: n = 8
Output: 268435456
Explanation: 8 in binary is 00000000000000000000000000001000. After reversing its bits, it becomes 00010000000000000000000000000000, which is 268435456 in decimal.
```

```
Input: n = 3
Output: 3221225472
Explanation: 3 in binary is 00000000000000000000000000000011. After reversing its bits, it becomes 11000000000000000000000000000000, which is 3221225472 in decimal.
```

```
Input: n = 0
Output: 0
Explanation: 0 in binary is 00000000000000000000000000000000. After reversing its bits, it becomes 00000000000000000000000000000000, which is 0 in decimal.
```

### Constraints

- 0 <= `n` <= 1,000,000

### Source

- [GreatFrontEnd](https://www.greatfrontend.com/questions/algo/bit-reversal?format=algo)
- [LeetCode 190 — Reverse Bits](https://leetcode.com/problems/reverse-bits/)
