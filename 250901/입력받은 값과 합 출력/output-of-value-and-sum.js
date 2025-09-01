const fs = require('fs')
let input = fs.readFileSync(0).toString().split(" ")

let [a, b] = input

console.log(a, b, a + b)