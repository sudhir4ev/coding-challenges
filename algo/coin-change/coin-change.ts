/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
export default function minimumCoinsForChange(coins: number[], target: number) {
  if (target == 0) return 0;

  // Infinity value -> unreachable `minCoin` for all sub targets
  const minCoins = new Array(target + 1).fill(Infinity);
  minCoins[0] = 0;

  coins.forEach((coin) => {
    for (let i = coin; i <= target; i++) {
      minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
    }
  });

  return minCoins[target] == Infinity ? -1 : minCoins[target];
}
