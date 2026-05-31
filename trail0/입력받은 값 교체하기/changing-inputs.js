const fs = require('fs')
const p = fs.readFileSync(0).toString().trim().split(' ').map(Number)


console.log(p[1], p[0])