const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f


a += b
b += a

console.log(a, b)