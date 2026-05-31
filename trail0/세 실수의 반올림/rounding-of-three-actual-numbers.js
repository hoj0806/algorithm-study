const fs = require('fs')
let p = fs.readFileSync(0).toString().trim().split('\n').map((n) => Number(n).toFixed(3))

let [a, b, c] = p

console.log(a)
console.log(b)
console.log(c)
