const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let cnt = 1
let blank = (n - 1) * 2

for (let i = 1; i <= (n * 2) - 1; i++) {
    let star = ''

    for (let k = 1; k <= blank; k++) {
        star += " "
    }

    for (let j = 1; j <= cnt; j++) {
        star += "@ "
    }

    if (i < n) {
        cnt++
        blank -= 2
    } else {
        cnt--
    }

    console.log(star)
}