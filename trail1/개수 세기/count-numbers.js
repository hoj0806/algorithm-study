const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split("\n")


let [a, b] = f[0].split(" ")
let arr = f[1].split(" ")

let cnt = 0


for (let i = 0; i < arr.length; i++) {
    if (arr[i] === b) cnt++
}

console.log(cnt)

