const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let arr = input[1].split(" ").map(Number).filter((i) => i % 2 === 0)

console.log(arr.join(" "))