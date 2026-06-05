const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)



for (let i = 1; i <= n; i++) {
    let str = ''

    for (let k = 1; k <= n; k++) {
        str += k
    }

    console.log(str)
}