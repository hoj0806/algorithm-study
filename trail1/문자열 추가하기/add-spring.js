const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

console.log(f + "Hello")