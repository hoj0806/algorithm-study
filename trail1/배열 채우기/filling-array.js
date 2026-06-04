const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let arr = Array(10)


for (let ele of f) {
    if (ele === 0) break
    arr.push(ele)
}

console.log(arr.reverse().join(" "))