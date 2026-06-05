const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = f

console.log(a.indexOf(b) === -1 ? "No" : a.indexOf(b))