const fs = require('fs')
const p = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [a, b] = p

console.log(a + b, ((a + b) / 2).toFixed(1))