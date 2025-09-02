const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let [a, b] = input

if(a >= 1.0 && b >= 1.0) {
    console.log("High")
} else if(a >= 0.5 && b >= 0.5) {
    console.log('Middle')   
} else {
    console.log('Low')
}