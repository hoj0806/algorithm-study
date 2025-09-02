const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

if(n === 12 || n <= 2) {
    console.log('Winter')
} else if(n >= 5) {
    console.log('Spring')
} else if(n >= 8) {
    console.log('Summer')
} else if(n >= 11) {
    console.log('Fall')
}