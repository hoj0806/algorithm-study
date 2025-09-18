const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)
let cnt = 0
for(let i = 1; i <= n; i++) {
    let str = ''
    for(let j = 1; j <= n; j++) {
        if(i % 2 !== 0) {
            cnt+=1
        } else {
            cnt+=2
        }
        str += cnt + " "
    }
    
    console.log(str)
}