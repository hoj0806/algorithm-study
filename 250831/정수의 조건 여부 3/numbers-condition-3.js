const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let number = Number(input)

if(number % 13 === 0 || number % 19 === 0) {
    console.log('True')
} else {
    console.log('False')
}