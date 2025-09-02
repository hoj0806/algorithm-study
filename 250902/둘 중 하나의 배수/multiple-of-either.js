const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let a = Number(input)

if(a % 3 === 0 || a % 5 === 0) {
    console.log(1)
} else {
    console.log(0)
}