/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  var arr = new Array(26).fill(0)
  var res = []
  var t = 0
  Array.prototype.forEach.call(S, (v,k)=>arr[S.charCodeAt(k) - 'a'.charCodeAt(0)] += 100)
  arr = arr.map((v,k)=>v + k).sort((a,b)=>b - a)
  if (parseInt(arr[0] / 100) > (S.length + 1) / 2) {
      return ''
  } else {
      arr.forEach(v=>{
          var ct = parseInt(v / 100)
          var ch = String.fromCharCode(v % 100 + 'a'.charCodeAt(0))
          Array.from({
              length: ct
          }).forEach((v,k)=>{
              if (t >= S.length)
                  t = 1
              res[t] = ch
              t += 2
          }
          )
      }
      )
  }
  return res.join('')
};
