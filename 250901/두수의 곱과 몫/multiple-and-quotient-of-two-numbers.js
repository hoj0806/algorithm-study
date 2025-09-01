const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

console.log(`${a} * ${b} = ${a * b}`)
console.log(`${a} / ${b} = ${parseInt(a / b)}`)
