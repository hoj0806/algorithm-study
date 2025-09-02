const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let a = Number(input)

if(a >= 10 && a <= 20) {
    console.log('yes')
} else {
    console.log('no')
}