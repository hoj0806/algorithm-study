const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [n , find] = input[0].split(" ")

let cnt = 0

for(let i = 1; i <= Number(n); i++) {
    if(input[i] === find) {
        cnt++
    }
}

console.log(cnt)