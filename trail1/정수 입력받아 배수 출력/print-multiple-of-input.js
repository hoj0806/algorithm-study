const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let result = ''
for(let i = n; i <= 5 * n; i+=n) {
    result += i + " "
}

console.log(result)