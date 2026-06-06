const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(f[0])


for (let i = 1; i <= n; i++) {
    let [a, b] = f[i].split(" ").map(Number)
    let sum = 0

    for (let j = a; j <= b; j++) {
        if (j % 2 === 0) sum += j
    }

    console.log(sum)
}

