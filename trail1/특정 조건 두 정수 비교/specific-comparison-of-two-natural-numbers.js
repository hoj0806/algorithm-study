const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

let x 
let y
if(a < b) {
    x = 1
} else {
    x = 0
}

if(a === b) {
    y = 1
} else {
    y = 0
}

console.log(x, y)