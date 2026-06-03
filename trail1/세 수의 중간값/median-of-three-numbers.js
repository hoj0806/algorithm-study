const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b, c] = f

if(b > a && b < c) {
    console.log(1)
} else {
    console.log(0)
}