const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let [a, b] = f

a+=8
b*=3

console.log(a)
console.log(b)
console.log(a * b)