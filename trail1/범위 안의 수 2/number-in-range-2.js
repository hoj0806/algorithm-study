const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let sum = 0
let count = 0

for(let i =0; i < f.length; i++) {
    if(0 <= f[i] && f[i] <= 200) {
        sum+=f[i]
        count+=1
    }   
}

console.log(sum, (sum / count).toFixed(1))