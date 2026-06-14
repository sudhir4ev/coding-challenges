# Smallest element in rotated sorted array

`#Medium` `#25mins`

Given a sorted and rotated array `numbers` containing unique elements, find and return the minimum element in this array.

Rotating an array `[a[0], a[1], a[2], ..., a[n-1]]` once results in `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`. Rotating it a second time results in `[a[n-2], a[n-1], a[0], a[1], ..., a[n-3]]`.

Develop an algorithm that runs in O(log n) time complexity.

#### Input
- `numbers: number[]`: An array of integers

### Examples
```
Input: numbers = [1,2,3,4]
Output: 1
Explanation: The original array [1,2,3,4] was rotated 0 times
```
```
Input: numbers = [3,4,1,2]
Output: 1
Explanation: The original array [1,2,3,4] was rotated 2 times
```
```
Input: numbers = [6,7,8,-5,-4,2]
Output: -5
Explanation: The original array [-5,-4,2,6,7,8] was rotated 3 times.

#### Constraints
- 1 <= `numbers.length` <= 1000
- -10,000 <= `numbers[i]` <= 10,000
