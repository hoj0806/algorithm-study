const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)


for (let i = 1; i <= n; i++) {
    let star = ''
    let m = ''

    for (let j = 1; j <= n - i + 1; j++) {
        m += "*"
    }

    m += " "

    for (let j = 1; j <= n - i + 1; j++) {
        star += m
    }


    console.log(star)
}