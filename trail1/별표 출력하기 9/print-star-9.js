const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)


for (let i = 1; i <= n; i++) {
    let star = ''
    for (let j = 1; j <= ((n * 2) - 2) - (2 * (i - 1)); j++) {
        star += " "
    }

    for (let k = 1; k <= (i * 2) - 1; k++) {
        star += "* "
    }

    console.log(star)
}