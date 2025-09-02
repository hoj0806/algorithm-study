const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input



let answer = `${parseInt(a / b)}.`

let  r =  (a % b) * 10
for(let i = 1; i <= 20; i++) {
    answer += (parseInt(r / b))
    r = (r % b) * 10
}

console.log(answer)

