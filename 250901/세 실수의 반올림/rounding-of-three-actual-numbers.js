const fs = require('fs')
let input = fs.readFileSync(0).toString().split('\n').map((i) => Number(i).toFixed(3))

let [a, b, c] = input

console.log(a)
console.log(b)
console.log(c)