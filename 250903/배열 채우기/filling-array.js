const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = []


for(ele of input) {
    if(ele === 0) {
        break
    } else {
        arr.push(ele)
    }
}

console.log(arr.reverse().join(" "))