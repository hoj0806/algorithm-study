const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [b, a] = f


let result = ''

for(let i = b; i >= a; i-=2) {
    result += i +  " "
}

console.log(result)