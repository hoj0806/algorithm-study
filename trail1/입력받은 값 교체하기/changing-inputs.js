const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let [a, b] = f
let temp 


temp = a
a = b
b = temp

console.log(a, b)