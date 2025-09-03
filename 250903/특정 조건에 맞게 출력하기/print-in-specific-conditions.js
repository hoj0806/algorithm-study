const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let arr = []

for(let i = 0; i < input.length; i++) {
    let l = input[i]
    if(l === 0) {
        break
    } else {
        if(l % 2 === 0) {
            arr.push(parseInt(l /2))
        } else {
            arr.push(l + 3)
        }
    }
}

console.log(arr.join(" "))