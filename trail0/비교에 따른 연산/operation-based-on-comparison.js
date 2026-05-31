const fs = require('fs')
const p = fs.readFileSync(0).toString().split(" ").map(Number)

let [a, b] = p

if(a > b) {
    console.log(a * b)
} else {
    console.log(Math.floor(b / a))
}