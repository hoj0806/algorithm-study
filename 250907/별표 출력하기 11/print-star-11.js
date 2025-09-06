const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = 1; i <=(n * 2) + 1; i++) {
    let star = ''
    for(let j = 1; j <= (n * 2) + 1; j++) {
        if(i % 2 === 0 && j % 2 === 0) {
            star += "  "
        } else {
            star += "* "
        }
    }
    console.log(star)
}