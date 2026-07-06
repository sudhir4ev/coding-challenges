# Neighborhood Theft

`#Medium` `#35mins`

An experienced robber aims to steal the money in the houses on a street. Each house has a certain amount of money hidden, but there is a catch: the security systems in adjacent houses are interconnected. If the robber breaks into two neighboring houses, the police will be alerted.

Given an array of integers `numbers` where each element represents the amount of money in a house, determine the maximum amount of money the robber can steal without triggering the alarm.

### Input

- `numbers: number[]`: An array of integers

### Notes

- The robber cannot steal from two adjacent houses

### Examples

```
Input: numbers = [1,2,3,1]
Output: 4
Explanation: Rob house 0 (1) + house 2 (3) = 4
```

```
Input: numbers = [2,7,9,3,1]
Output: 12
Explanation: Rob house 0 (2) + house 2 (9) + house 4 (1) = 12
```

```
Input: numbers = [3,6,1,0,6,0,0,9]
Output: 21
Explanation: Rob house 1 (6) + house 4 (6) + house 7 (9) = 21
```

### Constraints

- 1 <= `numbers.length` <= 100
- 0 <= `numbers[i]` <= 400

### Source

- [GreatFrontEnd](https://www.greatfrontend.com/questions/algo/neighborhood-theft?format=algo)
- [LeetCode 198 — House Robber](https://leetcode.com/problems/house-robber/)
