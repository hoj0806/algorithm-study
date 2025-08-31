const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let score = Number(input)

if(score >= 80) {
    console.log('pass')
} else {
    console.log(`${80 - score} more score`)
}