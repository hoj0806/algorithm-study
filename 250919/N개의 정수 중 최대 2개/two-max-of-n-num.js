const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let r = input[1].split(" ").map(Number)
let arr = []

let maxValue = r[0]
let next = r[1]
for(let i = 2; i < r.length; i++) {
   let findMax = false
   
   if(r[i] > maxValue) {
     maxValue = r[i]
     findMax = true
    
   }

   if((r[i] > next && r[i] <= maxValue) && findMax === false) {
       next = r[i]
   }

}

console.log(maxValue, next)

