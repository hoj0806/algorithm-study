const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

let answer = ''

while(a >= b) {
    answer += a + " "
    a--
}

console.log(answer)