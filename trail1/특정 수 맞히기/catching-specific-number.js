const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)


let idx = 0

while(true) {
    let s = f[idx]

    if(s === 25) {
        console.log("Good")
        break
    } else if(s <= 25) {
        console.log("Higher")
    } else {
        console.log("Lower")
    }
    idx++
}
