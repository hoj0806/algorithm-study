const fs = require('fs')
let p = fs.readFileSync(0).toString().split(' ').map(Number)

let [a, b] = p

let z = a < b ? 1 : 0
let y = a === b ? 1 : 0

console.log(z, y)