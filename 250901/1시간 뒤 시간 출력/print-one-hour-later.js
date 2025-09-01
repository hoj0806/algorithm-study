const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let [hour, minute] = input.split(":").map(Number)

console.log(`${hour+1}:${minute}`)