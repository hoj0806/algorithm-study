const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let result = ''
while(n >= 1) {
    result += n + " "
    n--
}

console.log(result)