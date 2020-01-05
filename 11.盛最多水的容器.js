/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var res = 0
  var i = 0
  var j = height.length - 1
  while (i < j) {
    res = Math.max(res, Math.min(height[i], height[j]) * (j - i));

    if (height[i] < height[j]) {
      i++;
    } else if (height[i] > height[j]) {
      j--;
    } else {
      i++;
      j--;
    }
  }
  return res
};

