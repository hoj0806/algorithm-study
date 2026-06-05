const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()


let n = Number(f)
let cnt = 1
let blank = 0


for (let i = 1; i <= n; i++) {
    let str = ''

    for (let j = 1; j <= blank; j++) {
        str += " "
    }

    for (let k = i; k <= n; k++) {
        str += cnt + " "
        cnt++
        if (cnt === 10) cnt = 1
    }

    console.log(str)

    blank += 2
}


