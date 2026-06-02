const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split("-").map(Number)


let[m, d, y] = f;

console.log(y + "." + m + "." + d)