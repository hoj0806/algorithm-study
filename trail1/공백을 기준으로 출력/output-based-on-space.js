const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let a = f[0].split(" ").join("")
let b = f[1].split(" ").join("")


console.log(a+b)