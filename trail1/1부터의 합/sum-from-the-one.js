const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let sum = 0
for(let i = 1; i <= 100; i++) {
    sum+=i
    if(sum >= n) {
        console.log(i)
        break
    }
}