const fs = require('fs')
let input = fs.readFileSync(0).toString().split('\n')

let x = input[0].split(" ").map(Number)
let c = Number(input[1])

let [a, b] = x

console.log(a, b, c)







