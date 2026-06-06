const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(f[0])


for (let i = 1; i <= n; i++) {
    let [a, b] = f[i].split(" ").map(Number)
    let prod = 1

    for (let j = a; j <= b; j++) {
        prod *= j
    }
    console.log(prod)
}