/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  if (n === 0)
    return '';
  n -= 1;
  return convertToTitle(Math.floor(n / 26)) + String.fromCharCode(n % 26 + 65);
};


