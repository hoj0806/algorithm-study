const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let answer = ''

let [a, b] = input

for(let i = b; i >= a; i--) {
    answer += i + " "
}

console.log(answer)