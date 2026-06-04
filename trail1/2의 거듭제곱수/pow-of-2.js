const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let prod = 1
let cnt = 0

while(true) {
    if(prod === n) break

    prod *= 2
    cnt++
}

console.log(cnt)