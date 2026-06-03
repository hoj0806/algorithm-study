const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

console.log(n === 1 ? "t" : "f")