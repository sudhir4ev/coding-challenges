# Merge New Interval

`#Medium` `#45mins`

Given a sorted array of non-overlapping intervals `intervals`, where each interval is represented as `[start, end]` and sorted in ascending order by `start` times, insert a new interval `[start, end]` into the array. Ensure the resulting array remains sorted and free of overlapping intervals by merging any overlapping intervals as necessary.

### Input

- `intervals: Array<[number, number]>`: An array of integer pairs
- `newInterval: [number, number]`: An integer pair representing `[start, end]`

### Examples

```
Input: intervals = [[1,2],[3,5],[6,10],[11,12],[13,16]], newInterval = [8,15]
Output: [[1,2],[3,5],[6,16]]
Explanation: The new interval [8, 15] overlaps with [6, 10], [11, 12], and [13, 16]. These intervals merge to form [6, 16], and the result is [[1, 2], [3, 5], [6, 16]].
```

```
Input: intervals = [[1,2],[3,4],[5,6],[7,8]], newInterval = [2,5]
Output: [[1,6],[7,8]]
Explanation: The new interval [2, 5] overlaps with [1, 2], [3, 4], and [5, 6]. Merging them results in [1, 6].
```

```
Input: intervals = [[2,4],[6,8],[10,12]], newInterval = [15,17]
Output: [[2,4],[6,8],[10,12],[15,17]]
Explanation: The new interval [15, 17] does not overlap with any existing intervals and is simply added at the end.
```

### Constraints

- 1 <= `intervals.length` <= 100
- `intervals[i].length == 2`
- 0 <= `start` <= `end` <= 10,000

### Source

- [GreatFrontEnd](https://www.greatfrontend.com/questions/algo/intervals-merge-new?format=algo)
- [LeetCode 57 — Insert Interval](https://leetcode.com/problems/insert-interval/)
