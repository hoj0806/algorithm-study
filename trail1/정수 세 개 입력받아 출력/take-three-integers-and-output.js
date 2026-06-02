const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let [a, b] = f[0].split(" ").map(Number)
let c = Number(f[1])

console.log(a, b, c )