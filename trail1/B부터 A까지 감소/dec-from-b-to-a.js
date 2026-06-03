const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

let result = ''

for(let i = b; i >= a; i--) {
    result += i +  " "
}

console.log(result)
