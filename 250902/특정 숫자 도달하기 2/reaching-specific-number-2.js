const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let answer = ''

for(let i = n; i >= 1; i--) {
    answer += i + " "
}

console.log(answer)