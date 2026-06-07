const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split("\n")

let min = 100000

let arr = f[1].split(" ").map(Number)
for (let i = 0; i < arr.length - 1; i++) {
    let d = arr[i + 1] - arr[i]
    if (d < min) min = d
}

console.log(min)