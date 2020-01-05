/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var a = nums[0]
  var b = nums[0]
  for (var i = 1; i < nums.length; i++) {
    if (b < 0) {
      b = nums[i]
    } else {
      b += nums[i]
    }
    if (b > a) {
      a = b
    }
  }
  return a
};

