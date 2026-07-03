/**
 * @param {number} steps
 * @return {number}
 */
export default function stairClimbingCombinations(steps: number): number {
  const cache: Record<number, number> = {};

  return _climber(steps)

  function _climber(steps: number): number {
    if (steps <= 1) return 1;
    if(cache[steps]) return cache[steps]
    
    cache[steps] =
    _climber(steps - 1) + _climber(steps - 2);

    return cache[steps]
  }
}
