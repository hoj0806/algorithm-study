const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let [a, b] = input

let arr = Array(10).fill(0)

while(true) {
    if(a <= 1) {
        break
    }
    arr[a % b]+=1
    a = parseInt(a / b)
}

let answer = 0

for(let i = 0; i < arr.length; i++) {
   answer += arr[i]**2
}

console.log(answer)