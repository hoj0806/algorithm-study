const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

for (let i = 1; i <= n * 2; i++) {
    let star = ''

    if (i % 2 !== 0) {
        for (let j = 1; j <= (i + 1) / 2; j++) {
            star += "* "
        }
    } else {
        for (let j = n - (i / 2) + 1; j >= 1; j--) {
            star += "* "
        }
    }

    console.log(star)
}