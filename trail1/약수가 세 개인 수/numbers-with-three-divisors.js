const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

let cnt = 0
for (let i = a; i <= b; i++) {
    let cnt2 = 0

    for (let j = 1; j <= i; j++) {
        if (i % j === 0) cnt2++
    }

    if (cnt2 === 3) cnt++
}

console.log(cnt)

