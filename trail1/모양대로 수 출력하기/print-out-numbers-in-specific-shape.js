const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)
let blank = 0

for (let i = n; i >= 1; i--) {
    let str = ''

    for (let k = 1; k <= blank; k++) {
        str += " "
    }

    for (let j = i; j >= 1; j--) {
        str += j + " "
    }

    blank += 2

    console.log(str)
}