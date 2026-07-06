# Disjoint Intervals

`#Medium` `#45mins`

Given an array of `intervals` where each interval is represented as `[start, end]`. Each pair denotes the start and end of an interval on a number line. For example, `[1, 3]` represents an interval that starts at 1 and ends at 3.

Find the minimum number of intervals that need to be removed so that the remaining intervals are disjoint.

Intervals are considered disjoint if no two intervals overlap on the number line. For example:

- `[1, 3]` and `[4, 6]` are disjoint because they do not share any common points
- `[1, 5]` and `[4, 6]` are not disjoint because they overlap at points between 4 and 5

### Input

- `intervals: Array<[number, number]>`: An array of integer pairs

### Examples

```
Input: intervals = [[1,5],[2,3],[3,4],[4,6]]
Output: 1
Explanation: [1,5] overlaps with multiple intervals, and removing it makes the rest non-overlapping. Since only one interval needs to be removed, the result is 1.
```

```
Input: intervals = [[1,15],[3,5],[6,8],[8,10],[9,11]]
Output: 2
Explanation: [1,15] overlaps with all other intervals, and [9,11] overlaps with [8,10]. Removing these two intervals makes the rest non-overlapping. Since two intervals need to be removed, the result is 2.
```

```
Input: intervals = [[1,4],[4,8]]
Output: 0
Explanation: [1,4] and [4,8] are already non-overlapping, so no intervals need to be removed. Hence, the result is 0.
```

### Constraints

- 0 <= `intervals.length` <= 100
- `intervals[i].length == 2`
- 0 <= `start` <= `end` <= 10,000

### Source

- [GreatFrontEnd](https://www.greatfrontend.com/questions/algo/disjoint-intervals?format=algo)
- [LeetCode 435 — Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
