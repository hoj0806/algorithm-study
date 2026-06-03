const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let n = f[0]

for(let i = 1; i <= n; i++) {
    if(f[i] % 3 ===0 && f[i] % 2 !== 0) {
        console.log(f[i])
    }
}