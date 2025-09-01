const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])

for(let i = 1; i <=n; i++) {
    let [start, end] = input[i].split(" ").map(Number)
    let total = 0
    for(let j = start; j <= end; j++) {
        if(j % 2 === 0) {
            total+=j
        }
    }
    console.log(total)    
}