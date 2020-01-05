/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 2) {
    return 2
  }
  if (n === 1) {
    return 1
  }
  var x = 1, y = 2
  for (var i = 2; i < n; i++) {
    var cur = x + y;
    x = y;
    y = cur;
  }
  return y
};

