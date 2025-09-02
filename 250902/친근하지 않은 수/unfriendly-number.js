const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let cnt = 0

for(let i = 1; i <= input; i++) {
    if((i % 2 === 0) || (i % 3 === 0) || i % 5 === 0) {
        continue
    } 
    cnt+=1
}

console.log(cnt)