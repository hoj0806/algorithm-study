const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

console.log(a + b)
console.log(a - b)
console.log(parseInt(a / b))
console.log(a % b)
