const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let n = input[0]

let r = 0

for(let i = 1; i <= n; i++) {
    if((input[i] % 2 !== 0) && (input[i] % 3 === 0)) {
        r+=i
    }
}

console.log(r)