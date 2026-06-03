const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [b, a] = f

let result = ''

while(b >= a) {
    result += b +  " "
    b-=2
}

console.log(result)