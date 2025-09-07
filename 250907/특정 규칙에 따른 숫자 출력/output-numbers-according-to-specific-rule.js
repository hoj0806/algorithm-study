const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)
let cnt = 1
for(let i = 1; i <= n; i++) {
    let str = ''
    for(let j = 1; j <= n; j++) {
        if(i <= j) {
            str += cnt + " "
            cnt++
            if(cnt === 10) {
                cnt = 1
            }
        } else {
            str += "  "
        }
    }
    console.log(str)
}