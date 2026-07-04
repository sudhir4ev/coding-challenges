/**
 * @param {number[][]} grid
 * @return {number}
 */
export default function countIslands(grid: number[][]): number {
  let countIslands = 1;

  for (let y = 0; grid[y] !== undefined; y++) {
    for (let x = 0; grid[y][x] !== undefined; x++) {
      if (isWater(y, x) || isVisitedLand(y, x)) continue;

      // start of new land
      countIslands++;
      gridWalker(y, x, countIslands);
    }
  }

  return countIslands - 1;

  /**
   * Walk the grid to find a single island
   */
  function gridWalker(y: number, x: number, islandNum: number) {
    // water or out of bounds
    if (isWater(y, x) || grid[y][x] == islandNum) return;

    grid[y][x] = islandNum;

    gridWalker(y, x + 1, islandNum);
    gridWalker(y, x - 1, islandNum);
    gridWalker(y + 1, x, islandNum);
    gridWalker(y - 1, x, islandNum);
  }

  function isWater(y: number, x: number) {
    return (
      grid[y] === undefined || grid[y][x] === undefined || grid[y][x] === 0
    );
  }

  function isVisitedLand(y: number, x: number) {
    return !isWater(y, x) && grid[y][x] !== 1;
  }
}
