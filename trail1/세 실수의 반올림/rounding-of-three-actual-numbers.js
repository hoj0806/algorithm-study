const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)

for(let i = 0; i < f.length; i++) {
    console.log(f[i].toFixed(3))
}