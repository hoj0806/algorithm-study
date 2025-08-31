const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let answer = 0

for(let i = 1; i <= n; i++) {
    if((i % 2 === 0 && i % 3 === 0) || i % 5 === 0) {
        console.log(i)
    } else {
        continue
    }
}

console.log(answer)