const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let r = input[1].split(" ").map(Number)

let max = Number.MIN_SAFE_INTEGER
let nextMax = Number.MIN_SAFE_INTEGER

for(let i = 0; i < r.length; i++) {
  console.log(r)
}