const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

let x = a + b
let y = a - b

console.log((x / y).toFixed(2))