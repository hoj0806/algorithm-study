const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b, c] = f

let sum = a + b + c
let average = sum / 3

console.log(sum)
console.log(average)
console.log(sum - average)
