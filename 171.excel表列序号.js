/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  return s
    .split('')
    .map(v => v.charCodeAt(0) - 64)
    .reverse()
    .reduce((res, cur, idx) => res + cur * Math.pow(26, idx), 0)
};

