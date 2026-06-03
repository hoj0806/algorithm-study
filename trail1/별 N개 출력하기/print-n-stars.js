const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let s = 1;

while(s <= n) {
    console.log("*")
    s++
}