const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

if(n >= 80) {
    console.log("pass")
} else {
    console.log(`${80 - n} more score`)
}