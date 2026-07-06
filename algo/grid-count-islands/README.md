# Count Islands in a Grid

`#Medium` `#35mins`

Given a two-dimensional binary grid `grid` displaying a map where `1`s signify land and `0`s signify water, determine the number of distinct islands.

An island is defined as a group of `1`s connected horizontally or vertically, and is surrounded by `0`s or the edge of the grid. It is assumed that the grid is completely surrounded by water.

### Input

- `grid: number[][]`: A 2D array where each element is `1` (land) or `0` (water)

### Examples

```
Input: grid = [[1,0],[0,0],[0,1],[0,1],[1,1]]
Output: 2
Explanation: Two separate islands
```

```
Input: grid = [[1,0,0],[1,1,1],[0,0,1]]
Output: 1
Explanation: All 1s are connected, forming one island
```

```
Input: grid = [[1,1,1],[0,0,0],[0,0,0]]
Output: 1
Explanation: Top row forms one island
```

### Constraints

- 1 <= `grid.length`, `grid[i].length` <= 100
- `grid[i][j]` is `0` or `1`

### Source

- [GreatFrontEnd](https://www.greatfrontend.com/questions/algo/grid-count-islands?format=algo)
- [LeetCode 200 — Number of Islands](https://leetcode.com/problems/number-of-islands/)
