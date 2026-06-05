const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)
let cnt = 1

for (let i = 1; i <= n; i++) {
    let str = ''


    for (let j = 1; j <= i; j++) {
        str += cnt + " "
        cnt++
    }

    console.log(str)
}