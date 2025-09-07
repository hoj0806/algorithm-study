const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let cnt = 2

for(let i = 1; i <= n; i++) {
    let str = ''
    for(let j = 1; j <= n; j++) {
        str += cnt + " "
        cnt+=2
        if(cnt === 10) cnt = 2
    }
    console.log(str)
}