const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let y = Number(f)

if(y % 4 === 0 ) {
    if(y % 100 === 0 && y % 400 !== 0) {
        console.log(false)
    } else {
        console.log(true)
    }
} else {
    console.log(false)
}