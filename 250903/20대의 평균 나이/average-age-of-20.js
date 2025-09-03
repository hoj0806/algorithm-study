const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let idx = 0
let sum = 0

while(true) {
    let age = input[idx]

    if(age >= 30) {
        console.log(sum / idx)
        break
    } 
    
    idx++
    sum+=age    
}