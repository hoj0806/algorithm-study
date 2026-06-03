const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let s = Number(f)

console.log(s === 100 ? "pass" : "failure")