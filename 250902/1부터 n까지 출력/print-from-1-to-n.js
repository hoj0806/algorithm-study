const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let n = Number(input)

let answer = ''

for(let i = 1; i <= n; i++) {
    answer += i + " "
}

console.log(answer)