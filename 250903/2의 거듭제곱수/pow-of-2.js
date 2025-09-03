const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let r = 2
let cnt = 1
while(true) {
    r*=2
    cnt+=1

    if(r === n) {
        console.log(cnt)
        break
    }

    
}