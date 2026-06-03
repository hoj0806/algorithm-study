const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

if(n < 0) {
    console.log("ice")
} else if(n >= 100) {
    console.log('vapor')
} else {
    console.log("water")
}