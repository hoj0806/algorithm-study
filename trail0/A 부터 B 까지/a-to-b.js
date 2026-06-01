const fs = require('fs')
let r = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = r

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