const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let [ a, b] = f

console.log(a * b)
