const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)
let prod = 1

for(let i = 1; i <= 10; i++) {
    prod *= i
    if(prod >= n) {
        console.log(i)
        break
    }
}