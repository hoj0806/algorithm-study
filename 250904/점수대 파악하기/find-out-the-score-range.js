const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = Array(11).fill(0)

for(let i = 0; i < input.length; i++) {
    let score = input[i]
    let n = parseInt(score / 10)
    
    if(score >= 10) {
        arr[n]+=1
    } 
}

arr.reverse()
arr.pop()

for(let i = 0; i < arr.length; i++) {
    console.log(100 - (i * 10) + " - " + arr[i])
}