/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length === 0) {
    return null
  }
  var res
  if (nums.length === 1) {
    res = new TreeNode(nums[0])
  } else {
    let mid = Math.ceil(nums.length / 2 - 1)
    res = new TreeNode(nums[mid])
    res.left = sortedArrayToBST(nums.slice(0, mid))
    res.right = sortedArrayToBST(nums.slice(mid + 1))
  }

  return res
};

