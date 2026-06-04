const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()


let n = Number(f)

let s = 1
let cnt = 0
while (true) {
    n = Math.floor(n / s)
    s++
    cnt++

    if (n <= 1) {
        console.log(cnt)
        break
    }

}