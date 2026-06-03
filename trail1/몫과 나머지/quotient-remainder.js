const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

let x = (Math.floor(a / b))
let y = ((a % b))

console.log(`${x}...${y}`)