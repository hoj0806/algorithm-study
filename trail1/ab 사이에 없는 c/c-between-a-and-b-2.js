const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b, c] = f


for (let i = a; i <= b; i++) {
    if (i % c === 0) {
        console.log('NO')
        return
    }
}

console.log('YES')
