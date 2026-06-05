const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ")


for(let i = 0; i < f.length; i++) {
    if(i % 2 === 0) console.log(f[i])
}

