const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b, c] = input

let satisfied = false

for(let i = a; i <= b; i++) {
    if(i % c === 0) {
        satisfied = true
    }
}

if(satisfied) {
    console.log('NO')
} else {
    console.log('YES')
}