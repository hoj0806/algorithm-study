const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b, c] = f

let x, y


if(a <= b && a <= c) {
    x = 1
} else {
    x = 0
}

if(a === b && b === c) {
    y = 1
} else {
    y = 0
}

console.log(x, y)