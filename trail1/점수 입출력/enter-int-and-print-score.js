const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let score = Number(input)

console.log(`Your score is ${score} point.`)