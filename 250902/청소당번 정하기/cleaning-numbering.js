const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let a = 0, b = 0, c = 0

for(let i = 1; i <= n; i++) {
    if(i % 12 === 0) {
        c++
    } else if(i % 3 === 0) {
        b++
    } else if(i % 2 === 0) {
        a++
    }
}

console.log(a, b, c)