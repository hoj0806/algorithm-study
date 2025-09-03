const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let count = 0
let idx = 0

while(true) {
    let n = input[idx]
    idx++
    
    if(n % 2 === 0) {
        console.log(parseInt(n / 2))
        count+=1   
    }


    if(count === 3) {
        break
    }
}