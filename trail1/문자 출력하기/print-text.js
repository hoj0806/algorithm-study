const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let result = ''

for(let i = 1;  i <= 8; i++) {
    result +=f
}

console.log(result)