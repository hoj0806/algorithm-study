const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

let answer = 0

for(let i = a; i <= b; i++) {
    let cnt = 0
    for(let j = 1; j <= i; j++) {
        if(i % j === 0) {
            cnt++
        }
    }

    if(cnt === 3) {
        answer++
    }
}

console.log(answer)