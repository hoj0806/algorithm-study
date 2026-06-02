const fs = require('fs')
let s = fs.readFileSync(0).toString().trim().split('\n')

console.log(s[1])

console.log(s[0])
