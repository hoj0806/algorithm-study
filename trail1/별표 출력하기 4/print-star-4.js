const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)
let cnt = n;

for (let i = 1; i <= (n * 2) - 1; i++) {
    let star = ''
    for (let j = 1; j <= cnt; j++) {
        star += "* "
    }

    if (i < n) {
        cnt--
    } else {
        cnt++
    }

    console.log(star)
}