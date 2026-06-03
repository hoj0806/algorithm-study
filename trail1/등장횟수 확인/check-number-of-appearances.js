const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let cnt = 0

for (let i = 0; i < f.length; i++) {
    if (f[i] % 2 === 0) cnt++
}


console.log(cnt)