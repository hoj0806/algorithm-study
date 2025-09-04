const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let cnt = 1
for(let i = 1; i <= (2 * n) - 1; i++) {
    let star = ""
    for(let k = 1; k <= n - cnt; k++) {
        star += " "
    }
    
    for(let j = 1; j <= cnt; j++) {
        star += "* "
    }

    if(i < n) {
        cnt++
    } else {
        cnt--
    }
    console.log(star)
}