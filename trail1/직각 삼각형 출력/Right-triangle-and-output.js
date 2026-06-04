const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

for (let i = 1; i <= n; i++) {
    let star = ''
    for (let j = 1; j <= (i * 2) - 1; j++) {
        star += "*"
    }
    console.log(star)
}