const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = input.map(Number)

let add = a + b

console.log(add, (add  / 2).toFiexd(2))