/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let diff = 0
  if (prices.length > 0) { // []
      prices.reduce((acc, next) => {
          if (next > acc) {
              diff += next - acc
          }
          return next
      })
  }
  return diff
};

