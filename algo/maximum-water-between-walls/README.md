# Maximum Water Trapped Between Walls

`#Medium` `#15mins` `#TwoPointers`

Given an array `walls` of wall heights, calculate the maximum volume of water that will be trapped between **two walls** and the x-axis after a heavy downpour.

### Input

- `walls: number[]`: An array of integers

### Examples

```
Input: walls = [1,4,2,3]
Output: 6
Explanation: Walls at index 1 (height 4) and index 3 (height 3): distance=2, min height=3, area=6
```

```
Input: walls = [1,1]
Output: 1
Explanation: distance=1, min height=1, area=1
```

```
Input: walls = [1,0]
Output: 0
Explanation: min height=0, area=0
```

### Constraints

- 2 <= `walls.length` <= 1000
- 0 <= `walls[i]` <= 10,000

### Source

- [GreatFrontEnd](https://www.greatfrontend.com/questions/algo/maximum-water-between-walls?format=algo)
- [LeetCode 11 — Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
