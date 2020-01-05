/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var i = s.trim().split(' ').filter(v => v)
  return i[i.length - 1] ? i[i.length - 1].length : 0
};

