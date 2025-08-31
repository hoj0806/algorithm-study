const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let a = 0

for(let i = 1; i <=100; i++) {
    if(a >= n) {
       if(a === n) {
        console.log(i)
       } else if(a > n) {
        console.log(i-1)
       }
       break
    }
    a+=i
}