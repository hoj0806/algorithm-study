const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split("\n")

let arr = f[1].split(" ").map(Number)

let result = ''


for(let ele of arr) {
    if(ele % 2 === 0) result += ele + " "
}

console.log(result)
