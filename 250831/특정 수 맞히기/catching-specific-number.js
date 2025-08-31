const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let idx = 0

while(true) {
    let userInput = Number(input[idx])
    if(userInput === 25) {
        console.log('Good')
        break
    } else {
        idx+=1
        if(userInput > 25) {
            console.log('Lower')
        } else {
            console.log('Higher')
        }
    }
}