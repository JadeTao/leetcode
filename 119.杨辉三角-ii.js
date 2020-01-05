/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var res = []
  for (var i = 0; i < rowIndex + 1; i++) {
    var j = i
    if (i === 0) {
      res[i] = 1
      continue
    }
    while (j >= 0) {
      res[j] = (res[j] || 0) + (res[j - 1] || 0)
      j--
    }
  }
  return res
};

