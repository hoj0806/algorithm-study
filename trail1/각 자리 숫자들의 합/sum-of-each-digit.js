const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let sum = 0


for(let ele of f) {
    sum += Number(ele)
}

console.log(sum)

