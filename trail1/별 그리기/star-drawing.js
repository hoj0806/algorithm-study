const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)
let blank = n - 1
let cnt = 1

for (let i = 1; i <= (n * 2) - 1; i++) {
    let star = ''

    for (let j = 1; j <= blank; j++) {
        star += " "
    }

    for (let k = 1; k <= cnt; k++) {
        star += "*"
    }

    if (i < n) {
        blank--
        cnt += 2
    } else {
        blank++
        cnt -= 2
    }

    console.log(star)
}