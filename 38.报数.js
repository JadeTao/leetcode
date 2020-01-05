/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  function read(n) {
    var s = n.toString()
    return s.split('').reduce((res, cur, idx) => {
      if (idx === 0) {
        res.push({ v: cur, count: 1 })
      } else {
        if (s[idx] === s[idx - 1]) {
          res[res.length - 1].count += 1
        } else {
          res.push({ v: cur, count: 1 })
        }
      }
      return res
    }, []).reduce((res, cur) => {
      return res += (cur.count + '' + cur.v)
    }, '')
  }
  var r = '1'
  for (var i = 1; i < n; i++) {
    r = read(r)
  }
  return r
};

