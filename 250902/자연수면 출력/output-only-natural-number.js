const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [a, b] = input


let answer = ''
if(a > 0) {
    for(let i = 1; i <= b; i++) {
        answer += b
    }
    console.log(answer) 
} else {
    console.log(0)
}