const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let three = 0
let five = 0

for(let i = 0; i < input.length; i++) {
    let n = input[i]
    if(n % 3 === 0) {
        three++
    }
     
    if(n % 5 === 0) {
        five++
    }
}

console.log(three, five)