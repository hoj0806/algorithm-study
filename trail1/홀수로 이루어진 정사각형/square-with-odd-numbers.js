const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let r = 11 + ((n - 1) * 2);
for (let i = 11; i <= r; i += 2) {
    let str = ''

    for (let j = i; j <= i + ((n - 1) * 2); j+=2) {
        str += j + " "
    }

    console.log(str)
}

