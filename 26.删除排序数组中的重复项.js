/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var j = 0
  var i = 0
  for (l = nums.length; i < l; i++) {
    if (nums[j] !== nums[i]) {
      j += 1
      nums[j] = nums[i]
    }
  }
  return j + 1
};

