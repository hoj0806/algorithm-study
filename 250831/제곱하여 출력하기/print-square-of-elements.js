const fs = require('fs')
let input = fs.readFileSync(0).toString().split("\n")

let a = Number(input[0])

let arr = input[1].split(" ").map((n) => Number(n**a))

console.log(arr.join(" "))