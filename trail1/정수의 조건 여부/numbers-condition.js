const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

if(n >= 113) {
    console.log(1)
} else {
    console.log(0)
}