/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) {
    return []
  }
  if (numRows === 1) {
    return [[1]]
  }
  var res = Array.from({ length: numRows }, () => [])
  res[0].push(1)
  for (var i = 1; i < numRows; i++) {
    var j = i
    while (j >= 0) {
      res[i][j] = (res[i - 1][j] || 0) + (res[i - 1][j - 1] || 0)
      j -= 1
    }
  }
  return res
};
