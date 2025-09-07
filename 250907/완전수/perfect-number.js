const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

let cnt = 0

for(let i = a; i <= b; i++) {
    let sum = 0
    for(let j = 1; j < i; j++) {
        if(i % j === 0) {
            sum+=j
        }
    }

    if(sum === i) {
        cnt++
    }
}

console.log(cnt)