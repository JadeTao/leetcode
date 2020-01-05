/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var a = {}
  var max
  nums.forEach(v => {
    if (a[v]) {
      a[v] += 1
    } else {
      a[v] = 1
    }
    if (a[v] > (a[max] || 0)) {
      max = v
    }
  })
  return max
};

