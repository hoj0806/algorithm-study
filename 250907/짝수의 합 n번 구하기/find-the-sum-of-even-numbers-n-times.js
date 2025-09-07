const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])

for(let i = 1; i <= n; i++) {
    let sum = 0
    let [a, b] = input[i].split(" ").map(Number)

    for(let j = a; j <= b; j++) {
        if(j % 2 === 0) {
            sum+=j
        }
    }
    console.log(sum)
}