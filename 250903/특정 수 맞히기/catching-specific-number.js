const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let idx = 0
while(true) {
    let n = input[idx] 
    idx++
    if(n === 25) {
        console.log('Good')
        break
    } else if(n > 25) {
        console.log("Lower")
    } else {
        console.log('Higher')
    }
}