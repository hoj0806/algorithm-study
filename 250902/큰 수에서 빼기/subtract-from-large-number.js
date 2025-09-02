const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

if(a >= b) {
    console.log(a - b)
}

if(a < b) {
    console.log(b -a)
}