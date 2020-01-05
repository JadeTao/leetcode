/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var idx = nums.indexOf(target)
  if (idx !== -1) {
    return idx
  } else if (nums[0] > target) {
    return 0
  } else if (nums[nums.length - 1] < target) {
    return nums.length
  } else {
    for (var i = 0; i < nums.length - 1; i++) {
      if (nums[i] <= target && nums[i + 1] >= target) {
        return i + 1
      }
    }
  }
};

