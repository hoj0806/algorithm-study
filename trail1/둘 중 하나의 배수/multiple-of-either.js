const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

if(n % 3 ===0 || n % 5 === 0) {
    console.log(1)
} else {
    console.log(0)
}