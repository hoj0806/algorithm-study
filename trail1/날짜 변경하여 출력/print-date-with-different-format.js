const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(".")

let [y, m, d] = f

console.log([m,d,y].join("-"))