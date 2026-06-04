const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let cnt = 0
let sum = 0
for (ele of f) {
    if (ele === 0) break

    if (ele % 2 === 0) {
        cnt++
        sum += ele
    }


}

console.log(cnt, sum)