const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let result = ''

for(let i = 1; i <=n; i++) {
    if(i % 2 === 0 || i % 3 === 0) {
        result += 1 + " "
    } else {
        result += 0 +  " "
    }
}

console.log(result)