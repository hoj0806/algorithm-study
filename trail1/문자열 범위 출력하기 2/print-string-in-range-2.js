const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let s = f[0]
let n = Number(f[1])

if (n > s.length) {
    n = s.length
}

let result = ''

for (let i = s.length - 1; i >= s.length - n; i--) {
    result += s[i]
}

console.log(result)
