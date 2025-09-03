const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let cnt = 0

while(true) {
    if(n === 1) {
        console.log(cnt)
        break
    } else {
        if(n % 2 === 0) {
            n/=2
        } else {
            n = (n * 3) + 1
        }
    }
    cnt+=1
}