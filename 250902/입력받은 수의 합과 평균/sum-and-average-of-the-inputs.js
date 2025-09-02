const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let n = input[0]

let cnt = 0
let sum = 0

for(let i = 1; i <= n; i++) {
    cnt+=1
    sum+=input[i]
}

console.log(sum, (sum / cnt).toFixed(1))