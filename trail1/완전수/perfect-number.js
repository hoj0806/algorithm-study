const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let cnt = 0

let [a, b] = f

for (let i = a; i <= b; i++) {
    let sum = 1

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            sum += j
        }
    }
    if (sum === i) cnt++
}

console.log(cnt)


