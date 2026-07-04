/**
 * @param {number[]} walls
 * @return {number}
 */
export default function maximumWaterBetweenWalls(walls: number[]) {
  /**
   * start the window from begenning to end of the walls
   * move shorter of start and end pointers and compare the resulting volume
   * with true max volume.
   */

  if (walls.length < 2) return 0;

  let start = 0,
    end = walls.length - 1,
    maxVol = 0;

  maxVol = Math.max(maxVol, Math.min(walls[start], walls[end]) * (end - start));

  do {
    if (walls[start] <= walls[end])
      // move start pointer forward
      start++;
    else
      // move end pointer backward
      end--;

    const newVol = Math.min(walls[start], walls[end]) * (end - start);
    maxVol = Math.max(maxVol, newVol);
  } while (start < end);

  return maxVol;
}
