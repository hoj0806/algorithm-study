const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let answer = 0

for(let i = 0; i < input.length; i++) {
    answer += Number(input[i])
}

console.log(answer)