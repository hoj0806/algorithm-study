const fs = require('fs')
let n = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = n

let total = 0

for(let i = a; i <= b; i++) {
    if(i % 2 === 0) {
        total+=i
    }
}

console.log(total)