const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)


for(let i = 1; i <= n; i++) {
    let star = ""
    if(i % 2 === 0) {
        for(let k = 1; k <= i; k++) {
            star += "* "
        }
    } else {
        star += "*"
    }

    console.log(star)
}