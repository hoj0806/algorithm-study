const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = 1; i <= n; i++) {
    let star = ''
    for(let j = 0; j < (2 * i) - 1; j++) {
        star+="*"
    }
    console.log(star)
}