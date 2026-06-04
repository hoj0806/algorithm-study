const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()


let n = Number(f)

for(let i = 1; i <= n; i++) {
    let star = ''
    for(let j = i; j <= n; j++) {
        star += "*"
    }


    for(let k = 1; k <= (2 * (i -1)); k++) {
        star += " "
    }

    for(let z = i; z <=n; z++) {
        star += "*"
    }


    console.log(star)
}