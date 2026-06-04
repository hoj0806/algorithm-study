const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ")

console.log(f.reverse().join(""))