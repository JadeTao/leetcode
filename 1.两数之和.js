/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var foo = {}
  var result = []
  nums.forEach(function (v, i) {
    if (typeof foo[v] === 'number') {
      result = [foo[v], i]
    } else {
      foo[target - v] = i
    }
  });
  return result
};

