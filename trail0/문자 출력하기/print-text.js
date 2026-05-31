const fs = require('fs')

const s = fs.readFileSync(0).toString().trim()

let result = ""
for(let i = 0; i < 8; i++) {
    result+=s
}

console.log(result)