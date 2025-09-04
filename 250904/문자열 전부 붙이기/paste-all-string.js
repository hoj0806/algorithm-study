const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

input.shift()

console.log(input.join(""))