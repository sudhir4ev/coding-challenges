# Merge Overlapping Intervals

`#Medium` `#35mins` `#Intervals` `#Sorting`

Given an array of `intervals` where each interval is represented as `[start, end]`. Each pair denotes the start and end of an interval on a number line. For example, `[1, 3]` represents an interval that starts at 1 and ends at 3.

**Merge all overlapping intervals** in the array and return an array of **non-overlapping intervals** that fully cover the ranges specified by the input intervals.

### Input

- `intervals: Array<[number, number]>`: An array of integer pairs

### Examples

```
Input: intervals = [[1,5],[6,10],[11,15]]
Output: [[1,5],[6,10],[11,15]]
Explanation: None of the intervals overlap, so they remain the same.
```

```
Input: intervals = [[1,3],[3,5]]
Output: [[1,5]]
Explanation: Intervals [1,3] and [3,5] are considered overlapping and are therefore are merged into [1,5].
```

```
Input: intervals = [[1,5],[2,4],[4,6],[7,8]]
Output: [[1,6],[7,8]]
Explanation: Intervals [1,5], [2,4] and [4,6] are considered overlapping and are therefore merged into [1,6].
```

### Constraints

- 1 <= `intervals.length` <= 100
- `intervals[i].length` == 2
- 0 <= `start` <= `end` <= 10,000

### Source

- [GreatFrontEnd](https://www.greatfrontend.com/questions/algo/intervals-combine-overlapping?format=algo)
- [LeetCode 56 — Merge Intervals](https://leetcode.com/problems/merge-intervals/)
