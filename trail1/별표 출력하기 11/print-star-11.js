const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

for(let i = 1; i <= (n * 2) + 1; i++) {
    let star = ''
    if(i % 2 !== 0) {
        for(let j = 1; j <= (n * 2) + 1; j++) {
            star += "* "
        }
    } else {
        for(let j = 1; j <= (n * 2) + 1; j++) {
            if(j % 2 === 0) {
                star += "   "
            } else {
                star += "*"
            }
        }
    }
    console.log(star)
}