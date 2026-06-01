const fs = require('fs')
let n = Number(fs.readFileSync(0).toString().trim())

console.log((n % 2 !== 0 && n % 3 === 0) || (n % 2 === 0 && n % 5 === 0))