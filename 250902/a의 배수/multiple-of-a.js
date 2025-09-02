const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [n, a] = input

let answer = ''

let start = 1

while(start <= n) {
    if(start % a === 0) {
        console.log(1)
    } else {
        console.log(0)
    }
    start+=1
}


