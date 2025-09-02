const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let answer = ''

let [a, b] = input


for(let i = a; i >= b; i--) {
    if(i % 2 !== 0) {
        answer += i + " "
    }
}

console.log(answer)