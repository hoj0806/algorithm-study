const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let sum = 0
let cnt = 0
for(let i = 0; i < input.length; i++) {
    let n = input[i]
    if(n >= 0 && n <= 200) {
        sum+=n
        cnt+=1
    }
}

console.log(sum, (sum / cnt).toFixed(1))