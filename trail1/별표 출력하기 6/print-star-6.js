const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)
let cnt = (n * 2) - 1
let blank = 0
for (let i = 1; i <= (n * 2) - 1; i++) {
    let star = ''

    for (let k = 1; k <= blank; k++) {
        star += " "
    }

    for (let j = 1; j <= cnt; j++) {
        star += "* "
    }



    if (i < n) {
        cnt -= 2
        blank += 2
    } else {
        cnt += 2
        blank -= 2
    }


    console.log(star)
}