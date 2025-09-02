const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = input.map(Number)

let x = a + b
let y = a - b

console.log((x / y).toFixe(2))