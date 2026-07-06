# Minimum Coins for Change

`#Medium` `#40mins`

Given an integer array `coins` indicating different coin denominations and an integer `target` denoting a total sum of money, return the minimum number of coins needed to make up the `target`. If it's not possible to make up the `target` with any combination of the coins, return `-1`.

Assume there's an infinite supply of each coin.

### Input

- `coins: number[]`: An array of integers
- `target: number`: An integer

### Examples

```
Input: coins = [3,7,4], target = 14
Output: 2
Explanation: 7 + 7 = 14, minimum 2 coins
```

```
Input: coins = [1], target = 0
Output: 0
Explanation: Target is 0, no coins needed
```

```
Input: coins = [2], target = 3
Output: -1
Explanation: Cannot form 3 with only denomination 2
```

### Constraints

- 1 <= `coins.length` <= 12
- 1 <= `coins[i]` <= 1,000,000
- 0 <= `target` <= 10,000

### Source

- [GreatFrontEnd](https://www.greatfrontend.com/questions/algo/coin-change?format=algo)
- [LeetCode 322 — Coin Change](https://leetcode.com/problems/coin-change/)
