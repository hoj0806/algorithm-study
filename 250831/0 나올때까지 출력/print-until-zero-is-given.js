const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split("\n")

let arr = input.map(Number)

let idx = 0
while(true) {
    if(arr[idx] === 0) {
        break
    }
    console.log(arr[idx])
    idx++
}