const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let s = f[0]
let [, a, b] = f

console.log(s)
console.log(Number(a).toFixed(2))
console.log(Number(b).toFixed(2))

