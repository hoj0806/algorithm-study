const fs = require('fs')
let p = fs.readFileSync(0).toString().trim()

let a = Number(p)

console.log(a)
if(a < 0) {
    console.log("minus")
}