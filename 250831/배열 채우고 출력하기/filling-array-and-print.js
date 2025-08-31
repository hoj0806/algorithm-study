const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let answer = input.reverse().join("")
console.log(answer)