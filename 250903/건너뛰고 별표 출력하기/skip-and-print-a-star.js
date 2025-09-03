const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let cnt = 1;

for(let i = 1; i <= (2 * n) - 1; i++) {
    let str = ''
    for(let j = 1; j <= cnt; j++) {
        str += "*"
    }
    
    if(i < n) {
        cnt+=1
    } else {
        cnt-=1
    }
    
    console.log(str)
    console.log()
}