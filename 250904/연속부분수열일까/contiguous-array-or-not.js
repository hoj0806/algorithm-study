const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')


let [a, b] = input[0].split(" ").map(Number)
let arr1 = input[1].split(" ").map(Number)
let arr2 = input[2].split(" ").map(Number)

let idx = arr1.join("").indexOf(arr2.join(""))

console.log(idx === -1 ? "No" : "Yes")