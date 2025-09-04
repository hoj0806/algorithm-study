const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [a, b] = input

console.log(a + b === b + a)