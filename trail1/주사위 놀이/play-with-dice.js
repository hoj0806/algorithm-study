const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let arr = Array(7).fill(0)

for(let ele of f) {
    arr[ele]++
}

for(let i = 1; i < arr.length; i++) {
    console.log(i + " - " + arr[i])
}
