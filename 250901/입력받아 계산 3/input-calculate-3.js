const fs = require('fs')
let input = fs.readFileSync(0).toString().split('\n').map(Number)

let [a, b] = input

console.log(a * b)
