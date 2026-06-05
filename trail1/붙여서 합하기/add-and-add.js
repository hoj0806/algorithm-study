const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = f

let x = a + b
let y = b + a

console.log(Number(x) + Number(y))