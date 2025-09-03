const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let sum = 0

for(let i = 1; i <= n; i++) {
    sum+=i
    if(sum >= n) {
        console.log(i)
        break
    }
}



