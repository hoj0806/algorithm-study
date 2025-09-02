const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let s = 1

while(s <= n) {
    console.log("*")
    s++
}