const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let cnt = 9

for(let i = 1; i <= n; i++) {
    let str = ''
    for(let j = 1; j <=n; j++) {
        str += cnt
        cnt--
        if(cnt === 0) cnt = 9
    }
    console.log(str)
}