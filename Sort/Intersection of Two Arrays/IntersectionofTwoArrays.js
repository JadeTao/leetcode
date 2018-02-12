/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var obj = {}
  var result = []
  nums1.forEach(v => obj[v] ? null : obj[v] = 1)
  nums2.forEach(v => obj[v] ? obj[v] = 0 : null)
  for (var i in obj) {
    if (obj[i] === 0)
      result.push(+i)
  }
  return result
}