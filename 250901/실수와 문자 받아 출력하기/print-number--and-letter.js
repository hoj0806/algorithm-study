const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let [str, a, b] = input

console.log(str)
console.log(a.toFixed(2))
console.log(b.toFixed(2))
