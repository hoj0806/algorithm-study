const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

if(n % 2 === 0) {
    n /= 2
}

if(n % 2 !== 0) {
    n = (n + 1)  / 2
}

console.log(n)