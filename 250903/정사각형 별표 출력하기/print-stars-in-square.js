const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(n)

for(let i = 1; i <= n; i++) {
    let str = ''
    for(let j = 1; j <= n; i++) {
        str += "*"
    }
    console.log(str)
}