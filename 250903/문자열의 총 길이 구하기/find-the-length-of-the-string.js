const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(i => i.length)

console.log(input.reduce((a, c) => a + c))