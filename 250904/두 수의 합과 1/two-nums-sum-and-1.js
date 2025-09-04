const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

let sum = (a + b).toString()

let cnt = 0

for(let i = 0; i < sum.length; i++) {
    if(sum[i] === "1") {
        cnt++
    }
}

console.log(cnt)