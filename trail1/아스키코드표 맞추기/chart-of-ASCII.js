const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = f.map(i => String.fromCharCode(i))

console.log(arr.join(" "))