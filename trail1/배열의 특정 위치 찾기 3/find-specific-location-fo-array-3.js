const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let idx = 0

for(let i = 0; i < f.length; i++) {
    if(f[i] === 0) {
        idx = i
        break
    }
}

console.log(f.slice(idx- 3, idx).reduce((a, c) => a + c, 0))