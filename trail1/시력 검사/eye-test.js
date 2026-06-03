const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split("\n").map(Number)

let [a, b] = f

if(a >= 1 && b >= 1) {
    console.log("High")
} else if(a >= 0.5 && b >= 0.5) {
    console.log("Middle")
} else {
    console.log("Low")
}