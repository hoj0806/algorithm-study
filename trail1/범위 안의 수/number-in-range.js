const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

if(10 <= n && n <= 20) {
    console.log('yes')
} else {
    console.log("no")
}