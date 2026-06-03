const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

if(n === 12 || n < 3) {
    console.log("Winter")
} else if(n >= 9) {
    console.log('Fall')
} else if(n >= 6) {
    console.log("Summer")
} else {
    console.log("Spring")
}