const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = f

console.log(a.charCodeAt(0), String.fromCharCode(b))

