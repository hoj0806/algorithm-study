const fs = requires('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])
let result = a + b + c

console.log(result.toFixed(3))