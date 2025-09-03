const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

let arr = [a, b]


for(let i = 2; i < 10; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 10
}

console.log(arr.join(" "))
