const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

for(let i = 1; i <= n; i++) {
    let str = ''

    for(let j = i * n; j >= (i * n) / n; j-=i) {
        str += j + " "
    }

    console.log(str)
}