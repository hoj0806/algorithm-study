const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = []

for(let ele of f) {
    if(ele === 0) break

    if(ele % 2 === 0) {
        arr.push(parseInt(ele / 2))
    } else {
        arr.push(ele + 3)
    }
}

console.log(arr.join(" "))
