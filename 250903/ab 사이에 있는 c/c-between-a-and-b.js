const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b, c] = input

for(let i = a; i <= b; i++) {
    if(i % c === 0) {
        console.log('YES')
        break
    }

    if(i === b) {
        console.log("NO")
    }

}