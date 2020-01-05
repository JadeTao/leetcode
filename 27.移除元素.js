/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var i = 0
  var j = 0
  for (k = nums.length; j < k; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i += 1
    }
  }
  if (i !== nums.length) {
    nums.splice(i)
  }
  return i
};

