const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = f

console.log(a.slice(0, 2) + b.slice(2, b.length))

