const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

if(a >= b) {
    console.log(a - b)
} else {
    console.log(b - a)
}