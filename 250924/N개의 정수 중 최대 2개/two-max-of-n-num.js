const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let r = input[1].split(" ").map(Number)

let max = Number.MIN_SAFE_INTEGER
let nextMax = Number.MIN_SAFE_INTEGER
let findMax = false
for(let i = 0; i < r.length; i++) {
  if(r[i] > max) {
    if(findMax === false) {
         max = r[i]
        nextMax = r[i]
        findMax = true
    } else {
      nextMax = max
      max = r[i]
    }
 
  }
}

console.log(max, findMax)