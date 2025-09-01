const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

console.log(`${parseInt(a/ b)}...${a % b}`)