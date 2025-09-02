const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

if((n % 2 !== 0 && n % 3 === 0) || (n % 2 !== 0 && n % 5 === 0)) {
    console.log(true)
} else {
    console.log(false)
}