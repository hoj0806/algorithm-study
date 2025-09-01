const fs = require('fs')
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let [a, b] = input

console.log(a)
console.log(b)
console.log(a * b)