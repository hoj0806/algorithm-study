const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)



let cnt = 0
let idx = 0
while (true) {
    if(cnt === 3) {
        break
    }

    let n = f[idx]
    if(n % 2 === 0) {
        console.log(Math.floor(n / 2))
        cnt++
    }
    idx++
}