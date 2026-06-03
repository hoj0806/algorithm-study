const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

let result = ''
while(a <= b) {
    result += a + " "
    a+=2
}

console.log(result)