const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let [a, b, c] = input.map(Number)

let add = a + b + c
let average = add / 3

console.log(add)
console.log(average)
console.log(add - average)
