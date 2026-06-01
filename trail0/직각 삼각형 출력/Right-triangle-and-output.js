const fs = require('fs')
let n = Number(fs.readFileSync(0).toString().trim())

for(let i = 1; i <= n; i++) {
    let star = ''
    for(let j = 1; j <= (i * 2) - 1; j++) {
        star += "*"
    }
    console.log(star)
}