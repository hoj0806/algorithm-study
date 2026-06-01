const fs = require('fs')
let n = Number(fs.readFileSync(0).toString().trim())

for(let i = n; i > 0; i--) {
    let star = ""
    for(let j = i; j > 0; j--) {
        star += "*" + " "
    }
    console.log(star)
}