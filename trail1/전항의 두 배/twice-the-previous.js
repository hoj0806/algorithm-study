const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f


let arr = [a, b]


for (let i = 2; i <= 9; i++) {
    arr[i] = arr[i - 1] + (2 * arr[i - 2])
}

console.log(arr.join(" "))