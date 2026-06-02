const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

console.log(f[0] * f[1])