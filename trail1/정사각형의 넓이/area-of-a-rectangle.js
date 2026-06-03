const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

console.log(n * n)
if(n < 5) {
    console.log("tiny")
}