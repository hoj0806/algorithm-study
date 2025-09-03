const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let r = n

for(let i = 1; i <= n; i++) {
    r = parseInt(r / i)
    if(r <= 1) {
        console.log(i)
        break
    }
}