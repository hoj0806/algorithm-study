const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = input.map(Number)

if(a > b) {
    console.log(a * b)
} else {
    console.log(parseInt(b / a))
}