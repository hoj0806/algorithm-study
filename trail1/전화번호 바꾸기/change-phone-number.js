const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split("-")

let [a, b, c] = f

console.log([a, c, b].join("-"))