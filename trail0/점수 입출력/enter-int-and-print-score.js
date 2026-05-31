const fs = require('fs')
let p = fs.readFileSync(0).toString().trim()

console.log(`Your score is ${p} point.`)