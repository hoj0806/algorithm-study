const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let r = 2
let cnt = 1

while(true) {
    if(r === n) {
        console.log(cnt)
        break
    }
    r*=2
   
    cnt+=1
}