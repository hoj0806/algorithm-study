const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let sum = 0

for(let i = 0; i < f.length; i++) {
    sum += f[i]
}

console.log(sum)
