const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

if(n % 2 !== 0) {
    n+=3
}

if(n % 3 === 0) {
    n/=3
}

console.log(n)