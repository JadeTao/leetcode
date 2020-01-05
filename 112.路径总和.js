/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) {
    return false
  }
  if (root.val === sum) {
    if (!root.left && !root.right) {
      return true
    }
  } else {
    if (!root.left && !root.right) {
      return false
    }
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};

