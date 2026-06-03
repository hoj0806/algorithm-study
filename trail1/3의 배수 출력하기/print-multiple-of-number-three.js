const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)
let s = 3
let result = ''

while(s <= n) {
    result += s + " "
    s+=3
}

console.log(result)