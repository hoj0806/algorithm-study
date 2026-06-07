const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let arr = f[1].split(" ").map(Number)

let min = arr[0]
let cnt = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]
}

for (let j = 0; j < arr.length; j++) {
    if (min === arr[j]) cnt++
}

console.log(min, cnt)