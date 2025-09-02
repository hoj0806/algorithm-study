const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

let r = 0
let cnt = 0

for(let i = a; i <= b; i++) {
    if((i % 5 === 0) || (i % 7 === 0)) {
        r+=i
        cnt+=1
    }
}

console.log(r, (r / cnt).toFixed(1))