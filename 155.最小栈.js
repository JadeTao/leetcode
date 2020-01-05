/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.v = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.v.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.v.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.v[this.v.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  var v = Number.MAX_SAFE_INTEGER
  for (var i = 0; i < this.v.length; i++) {
    if (this.v[i] < v) {
      v = this.v[i]
    }
  }
  return v
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

