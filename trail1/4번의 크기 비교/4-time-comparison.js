const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let a = Number(f[0])

let [b, c, d, e] = f[1].split(" ").map(Number)

console.log(a > b ? 1 : 0)
console.log(a > c ? 1 : 0)
console.log(a > d ? 1 : 0)
console.log(a > e ? 1 : 0)

