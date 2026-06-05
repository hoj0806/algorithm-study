const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)


for(let i = 1; i <= n; i++) {
    let str = ''

    for(let j = n; j >= 1; j--) {
        str += j + " "
    }

    console.log(str)
}