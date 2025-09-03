const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = BigInt(input)

let r = 2n
let cnt = 1
while(true) {
    r*=2n
    cnt+=1

    if(r === n) {
        console.log(cnt)
        break
    }

    
}