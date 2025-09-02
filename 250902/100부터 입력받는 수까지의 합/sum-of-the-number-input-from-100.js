const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let r = 0

for(let i = n; i <= 100; i++) {
    r+=i
}

console.log(r)