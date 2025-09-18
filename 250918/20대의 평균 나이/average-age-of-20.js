const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let sum = 0

for(let i = 0; i < input.length; i++) {
    let age = input[i]
    if(age >= 30) {
        console.log((sum / (i)).toFixed(2))
        break
    } else {
         sum+=age
    }

    if(i === input.length - 1) {
        console.log((sum / (i + 1)).toFixed(2))
    }
}


