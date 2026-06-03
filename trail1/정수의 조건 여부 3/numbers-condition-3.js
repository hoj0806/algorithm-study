const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

if(n % 13 === 0 || n % 19 === 0) {
    console.log("True")
} else {
    console.log("False")
}