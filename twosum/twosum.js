/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var obj = {};
  var result = [];
  nums.forEach(function (v, k) {
    if (obj[target - v]) {
      result = [obj[target - v], k]
    } else {
      obj[v] = k
    }
  })
  return result
};