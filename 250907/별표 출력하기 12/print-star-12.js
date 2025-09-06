const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = 1; i <= n; i++) {
    let star = ''
    for(let j = 1; j <= n; j++) {
        if(i === 1) {
            star += "* "
        } else {
            if(j % 2 === 0) {
                if(j >= i) {
                     star += "* "
                } else {
                     star += "  "
                }
        } else {
            star += "  "
        }
        }
        
    }
    console.log(star)
}