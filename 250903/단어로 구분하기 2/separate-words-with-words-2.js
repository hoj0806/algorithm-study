const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ')

let f = input.filter((s, i) => (i + 1) % 2 !== 0) 

console.log(f.join('\n'))