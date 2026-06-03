const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

if(n === 5) {
    console.log("A")
}

if(n % 2 === 0) {
    console.log("B")
}