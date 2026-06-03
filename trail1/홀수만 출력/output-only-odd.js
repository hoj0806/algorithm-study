const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f


let result = ''

for(let i = a; i <= b; i+=2) {
    result += i + " "
}

console.log(result)