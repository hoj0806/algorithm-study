const fs = require('fs')
let n = Number(fs.readFileSync(0).toString().trim())

let cnt = 0
for(let i = 0; i < n; i++) {
    let s = ""
    for(j = 0; j <= i; j++) {
        cnt++
        s += cnt + " "
    }
    console.log(s.trim())
}