const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

for (let i = n; i >= 1; i--) {
    let str = ''

    for (let j = i; j <= n; j++) {
        str += j + " "

    }

    console.log(str)
}
