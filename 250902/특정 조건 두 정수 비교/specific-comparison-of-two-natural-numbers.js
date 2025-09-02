const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

if(a < b) {
    console.log(1)
} else {
    console.log(0)
}

if(a === b) {
    console.log(1)
} else {
    console.log(0)
}