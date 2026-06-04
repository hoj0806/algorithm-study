const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)


for(let i = 0; i < f.length; i++) {
    if(f[i] % 3 !== 0) {
        console.log(0)
        return
    }
}

console.log(1)