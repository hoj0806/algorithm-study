const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let a = Number(input)

let result = a === 1 ? 't' : 'f'

console.log(result)