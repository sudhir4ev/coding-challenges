# Meeting Calendar

`#Easy` `#35mins` `#Intervals` `#Sorting`

Given an array of meeting time intervals where each element represents a meeting time as `[start, end]`, determine whether a person can attend all the meetings without any overlap between meeting times.

### Input

- `intervals: Array<[number, number]>`: A 2D array of integers `intervals` of size `n x 2`, where `n` is the number of meetings and each interval `[start, end]` represents a meeting starting at time `start` and ending at time `end`

### Examples

```
Input: intervals = [[83,99]]
Output: true
Explanation: There is only one meeting, so there is no possibility of overlap.
```

```
Input: intervals = [[1,5],[5,10],[10,15]]
Output: true
Explanation: The meetings are back-to-back but do not overlap.
```

```
Input: intervals = [[8,10],[1,3],[2,6],[15,18]]
Output: false
Explanation: The meetings [1, 3] and [2, 6] overlap, so it is not possible to attend all meetings.
```

### Constraints

- 0 <= `intervals.length` <= 1000
- `intervals[i].length` == 2
- 0 <= `start` < `end` <= 1,000,000

### Source

- [GreatFrontEnd](https://www.greatfrontend.com/questions/algo/intervals-meeting-calendar?format=algo)
- [LeetCode 252 — Meeting Rooms](https://leetcode.com/problems/meeting-rooms/)
