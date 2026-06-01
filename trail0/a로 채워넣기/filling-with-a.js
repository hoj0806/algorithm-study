const fs = require('fs')
let n = fs.readFileSync(0).toString().trim()

console.log(n.slice(0, 1) + "a" + n.slice(2, -2) + "a" + n.slice(-1, n.length))