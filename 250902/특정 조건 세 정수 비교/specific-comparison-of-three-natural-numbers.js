const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b, c] = input

if(a <= b && a <= c) {
    console.log(1)
} else {
    console.log(0)
}

if((a === b) && (b === c)) {
    console.log(1)
} else {
    console.log(0)
}