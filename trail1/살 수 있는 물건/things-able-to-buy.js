const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let m = Number(f)

if(m >= 3000) {
    console.log("book")
} else if(m >= 1000) {
    console.log("mask")
} else {
    console.log("no")
}