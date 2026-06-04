const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let odd = 0
let even = 0

for(let i = 0; i < f.length; i++) {
    if(i % 2 === 0) {
        odd += f[i]
    } else {
        even += f[i]
    }
}

console.log(
    odd >= even ? odd - even : even - odd
)