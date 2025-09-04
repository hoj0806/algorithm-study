const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")


let [a, b] = input

let x = a + b
let y = b + a


console.log(Number(x) + Number(y))