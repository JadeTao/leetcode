/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var valid = true
  var stack = []
  var l = { '(': 1, '[': 1, '{': 1 }
  var m = { '(': ')', '[': ']', '{': '}' }
  for (var i = 0; i < s.length; i++) {
    if (l[s[i]]) {
      stack.push(s[i])
    } else {
      if (m[stack.pop()] === s[i]) {
        continue
      } else {
        valid = false
        break
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return valid;
};

