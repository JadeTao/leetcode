/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) {
    return true
  }
  return (Math.abs(getLen(root.left) - getLen(root.right)) <= 1) && isBalanced(root.left) && isBalanced(root.right)
};

function getLen(node) {
  if (!node) {
    return 0
  }
  if (!node.left && !node.right) {
    return 1
  }
  return 1 + Math.max(getLen(node.left), getLen(node.right))
}