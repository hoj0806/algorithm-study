const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let [a, b, c] = input.map(Number)

let add = a + b + c

console.log(add)
console.log(Math.floor(add / 3))