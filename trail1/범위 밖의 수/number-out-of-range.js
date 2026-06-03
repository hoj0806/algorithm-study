const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

if(n < 10 || n > 20) {
    console.log('yes')
} else {
    console.log('no')
}