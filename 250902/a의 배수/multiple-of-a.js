const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, n] = input

let answer = ''

let start = 1

while(start <= n) {
    if(start % a === 0) {
        answer += '1 '
    } else {
        answer += '0 '
    }
}

console.log(answer)
