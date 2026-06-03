const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)


if(n >= 1.0) {
    console.log("High")
} else if(n >= 0.5) {
    console.log("Middle")
} else {
    console.log("Low")
}