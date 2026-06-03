const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

let sum = a + b
let average = sum / 2

console.log(sum, average.toFixed(1))