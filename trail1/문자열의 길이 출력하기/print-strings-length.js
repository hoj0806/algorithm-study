const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

console.log(f[0].length + f[1].length)