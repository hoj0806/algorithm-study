const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let prod = 1
for(let i = 1; i <= n; i++) {
    prod*=i
    if(prod >= n) {
        console.log(i)
        break
    }
}