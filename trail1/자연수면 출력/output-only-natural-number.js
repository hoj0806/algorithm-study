const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

let result = ''

if(a <= 0) {
    console.log(0)
} else {
    for(let i = 1; i <= b; i++) {
        result+= a
    }
}

console.log(result)