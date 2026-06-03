const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

let result = ''

while(a <= b) {
    result += a + " "
    if(a % 2 !== 0) {
        a*=2
    } else {
        a+=3
    }
}

console.log(result)