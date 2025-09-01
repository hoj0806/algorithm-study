const fs = require('fs')
let number = Number(fs.readFileSync(0).toString())
console.log(number * 2)