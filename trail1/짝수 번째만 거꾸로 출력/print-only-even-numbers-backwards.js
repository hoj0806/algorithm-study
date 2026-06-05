const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let result = ''


for (let i = f.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) result += f[i]
}

console.log(result)