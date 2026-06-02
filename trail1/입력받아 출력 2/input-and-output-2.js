const fs = require('fs')
let s= fs.readFileSync(0).toString().trim().split('-')

console.log(s.join(""))