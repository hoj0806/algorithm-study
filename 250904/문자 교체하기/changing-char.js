const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = input

let arr = b.split("")

arr[0] = a[0]
arr[1] = b[1]

console.log(b.join(""))