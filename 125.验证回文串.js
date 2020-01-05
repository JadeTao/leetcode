/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var i = s.toLowerCase().replace(/\W/g, '');
  var j = i.split('').reverse().join('');
  return i === j;
};

