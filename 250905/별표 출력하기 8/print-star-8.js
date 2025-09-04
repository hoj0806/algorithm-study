const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = 1; i <= n; i++) {
    let star = ""
    if(i % 2 !== 0) {
        star += "*"
    } else {
        for(let j = 1; j <= i; j++) {
            star += "* "
        }
    }
    console.log(star)
}