const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = Array(10).fill(0)

for (let ele of f) {
    if (ele === 0) break

    arr[parseInt(ele / 10)]++
}

for (let i = 1; i < arr.length; i++) {
    console.log(i + " - " + arr[i])
}