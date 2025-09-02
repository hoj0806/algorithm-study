const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)
let answer = ''

for(let i = 1; i <= n; i++) {
    answer+=input
}

console.log(answer)