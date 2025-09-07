const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let n = input[0]

for(let i = 1; i <= n; i++) {
    let number = input[i]
    let cnt = 0

    while(number !== 1) {
        if(number % 2 === 0) {
            number/=2
        } else {
            number = (number * 3) + 1
        }
        cnt++
    }

    console.log(cnt)
}