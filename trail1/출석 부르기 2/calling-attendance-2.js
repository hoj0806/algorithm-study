const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let idx = 0


while(true) {
    let s = f[idx]

    if(s === 1) {
        console.log("John")
    } else if(s === 2) {
        console.log("Tom")
    } else if(s === 3) {
        console.log("Paul")
    } else if(s === 4) {
        console.log("Sam")
    } else {
        console.log("Vacancy")
        break
    }
    idx++
}
