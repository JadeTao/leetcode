/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var obj = {}
  var res = []
  nums1.forEach(v => obj[v] ? obj[v] += 1 : obj[v] = 1)
  nums2.forEach(v => obj[v] && obj[v]-- > 0 ? res.push(v) : null)
  return res
};