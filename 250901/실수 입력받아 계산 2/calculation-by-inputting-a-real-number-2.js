const fs = require('fs')
let input = fs.readFileSync(0).toString()

let n = Number(input)

console.log((n + 1.5).toFixed(2))