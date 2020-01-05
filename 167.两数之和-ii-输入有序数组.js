/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var i = 0
  var j = numbers.length - 1
  while (numbers[i] + numbers[j] !== target && i !== j) {
    if (numbers[i] + numbers[j] > target) {
      j -= 1
    } else {
      i += 1
    }
  }
  return [i + 1, j + 1]
};

