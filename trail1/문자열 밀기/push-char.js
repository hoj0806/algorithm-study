const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let str = f

console.log(str.slice(1, str.length) + str.slice(0, 1))