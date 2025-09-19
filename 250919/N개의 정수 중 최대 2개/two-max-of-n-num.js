const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let r = input[1].split(" ").map(Number)
let arr = []

let maxValue = r[0]
let next = r[1]
for(let i = 2; i < r.length; i++) {
   if(r[i] > maxValue) {
    maxValue = r[i]
   }

   if(r[i] > next && r[i] < maxValue) {
       next = r[i]
   }
}

console.log(maxValue, next)

