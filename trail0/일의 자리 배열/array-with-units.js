const fs = require('fs')
const n = fs.readFileSync(0).toString().trim().split(" ").map(Number)


for(let i = 2; i < 10; i++) {
    let sum = n[i-1] + n[i-2]
    if(sum >= 10) {
        n.push(sum % 10)
    } else {
        n.push(sum)
    }
}

console.log(n.join(" "))