const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

console.log(f[2] + f[4] + f[9])

