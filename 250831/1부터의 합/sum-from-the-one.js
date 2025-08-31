const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let a = 0

for(let i = 1; i <=100; i++) {
     a+=i
    if(a >= n) {
      console.log(i)
      break
    }
}