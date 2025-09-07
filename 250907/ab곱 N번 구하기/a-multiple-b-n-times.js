const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])

for(let i = 1; i <= n; i++) {
    let [a, b] = input[i].split(" ").map(Number)
    let sum = 1
    for(let j = a; j <= b; j++) {
        sum*=j
    }
    console.log(sum)
}