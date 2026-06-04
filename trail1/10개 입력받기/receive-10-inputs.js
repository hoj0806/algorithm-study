const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let sum = 0
let cnt = 0
for(ele of f) {
    if(ele === 0) break
    sum +=ele
    cnt++
}

console.log(sum, (sum / cnt).toFixed(1))

