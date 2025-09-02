const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

let answer = ''

while(a <= b) {
    answer += a + ' '
    if(a % 2 !== 0) {
        a*=2
    } else {
        a+=3
    }
}

console.log(answer)
