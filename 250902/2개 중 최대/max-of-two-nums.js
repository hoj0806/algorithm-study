const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = input.map(Number)

let result = a >= b ? a : b
console.log(result)