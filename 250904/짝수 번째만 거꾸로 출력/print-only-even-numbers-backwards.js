const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let answer = input.split("").filter((s, index) => (index + 1) % 2 === 0).reverse().join("")

console.log(answer)