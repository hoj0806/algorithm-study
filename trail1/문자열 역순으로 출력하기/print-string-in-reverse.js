const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


for (let i = f.length - 1; i >= 0; i--) {
    console.log(f[i])
}