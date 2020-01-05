/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var len = a.length
  if (a.length > b.length) {
    len = a.length
    b = '0'.repeat(len - b.length) + b
  } else if (a.length < b.length) {
    len = b.length
    a = '0'.repeat(len - a.length) + a
  }
  var r = []
  for (var i = len - 1; i >= 0; i--) {
    r[i] = (r[i] || 0) + (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0)
    if (r[i] >= 2) {
      if (i === 0) {
        r.unshift(1)
        r[i + 1] -= 2
      } else {
        r[i - 1] = 1
        r[i] -= 2
      }

    }
  }
  return r.join('')
};

