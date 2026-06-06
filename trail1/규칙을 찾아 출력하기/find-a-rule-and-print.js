const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

for (let i = 1; i <= n; i++) {
    let star = ''

    for (let j = 1; j <= n; j++) {
        if (i === 1 || j === 1 || i === n || j === n) {
            star += "* "
        } else {
            if (j < i) {
                star += "* "
            } else {
                star += "  "
            }
        }

    }

    console.log(star)
}