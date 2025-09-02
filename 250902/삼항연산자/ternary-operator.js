const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let score = Number(input)

let result = score === 100 ? 'pass' : 'failure'

console.log(result)