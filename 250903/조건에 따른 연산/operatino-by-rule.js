const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let cnt = 0
while(true) {

    cnt+=1

    if(n % 2 === 0) {
        n = (n * 3) + 1
    } else {
        n = (n * 2) + 2
    }

    if(n >= 1000) {
        console.log(cnt)
        break
    }


}