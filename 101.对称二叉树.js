/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  return isSym(root.left, root.right)
};

var isSym = function (left, right) {
  if (left === null || right === null) {
    return left === right
  }
  if (left.val !== right.val) {
    return false
  }
  return isSym(left.left, right.right) && isSym(left.right, right.left)
}

