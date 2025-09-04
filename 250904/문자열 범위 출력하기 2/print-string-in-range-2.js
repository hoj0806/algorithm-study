const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let str = input[0]


console.log(str.slice(-5))