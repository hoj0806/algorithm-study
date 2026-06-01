const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [a, b] = f
let result = 0
for(let i = a; i <= b; i++) {
    let cnt = 0

    for(let j = 1; j <= i; j++) {
        if(i % j === 0) {
            cnt++
        }
    }

    if(cnt === 3) result++
}

console.log(result)