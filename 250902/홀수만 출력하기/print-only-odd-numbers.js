const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])

for(let i = 1; i <= n; i++) {
   let number = input[i]
   if((number % 3 === 0) && (number % 2 !== 0)) {
        console.log(number)
   }
}