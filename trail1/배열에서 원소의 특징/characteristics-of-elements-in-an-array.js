const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


for(let i = 0; i < f.length; i++) {
    if(f[i] % 3 === 0) {
        console.log(f[i-1])
        return
    }
}