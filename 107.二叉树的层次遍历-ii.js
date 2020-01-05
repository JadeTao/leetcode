/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return []
  }
  var res = []
  loopChild(root, 0, res)
  return res.reverse()
};

var loopChild = function (node, level, res) {
  if (node) {
    if (res[level]) {
      res[level].push(node.val)
    } else {
      res[level] = [node.val]
    }
    loopChild(node.left, level + 1, res)
    loopChild(node.right, level + 1, res)
  }
}


