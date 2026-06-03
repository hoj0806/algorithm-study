const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let [a , b] = f

a += 87
b %= 10

console.log(a)
console.log(b)
