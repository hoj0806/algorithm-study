const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(s => s.replaceAll(" ", ""))

console.log(input.join(""))