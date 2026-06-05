const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ")

let sum = 0


for(let ele of f) {
    sum+= ele.length
}

console.log(sum)

