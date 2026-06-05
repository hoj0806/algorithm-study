const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()


let a = f.slice(0, 1)
let b = f.slice(2, -2)
let c = f[f.length - 1]
console.log(a + b + c)