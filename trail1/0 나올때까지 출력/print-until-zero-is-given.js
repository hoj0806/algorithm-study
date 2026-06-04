const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)


let idx = 0

while(true) {
    if(f[idx] === 0) {
        break
    }

    console.log(f[idx])
    idx++
}