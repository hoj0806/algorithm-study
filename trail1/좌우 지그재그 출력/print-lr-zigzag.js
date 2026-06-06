const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)


let cnt = 1


for (let i = 0; i < n; i++) {
    let str = ''

    if (i % 2 === 0) {
        for (let j = (n * i) + 1; j <= n * (i + 1); j++) {
            str += j + " "
        }
    } else {
        for (let j = n * (i + 1); j >= (n * i) + 1; j--) {
            str += j + " "
        }
    }

    console.log(str)
}