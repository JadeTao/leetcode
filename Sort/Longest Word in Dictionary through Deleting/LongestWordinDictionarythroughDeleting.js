/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
  let ans = ''
  for (let j = 0; j < d.length; j++) {
      let idx = 0
      for (let i = 0; i < s.length; i++) {
          if (idx == d[j].length)
              break
          if (s[i] == d[j][idx])
              idx += 1
      }
      if (idx != d[j].length)
          continue
      if (ans.length < d[j].length || (ans.length == d[j].length && d[j] < ans))
          ans = d[j]
  }
  return ans
};