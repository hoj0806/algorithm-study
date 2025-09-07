const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let cnt = 1
for(let i = 1; i <= n; i++) {
    let str = ''
    for(let j = 1; j <= i; j++) {
        str += cnt + " "
        cnt++
    }
    console.log(str)
}