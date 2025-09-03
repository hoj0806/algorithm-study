const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(s => s.length)

let s = input.sort((a, b) => a - b)

console.log(Math.abs(s[0] - s[s.length - 1]))

