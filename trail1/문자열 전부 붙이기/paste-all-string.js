const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


console.log(f.slice(1).join(""))