const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let arr = []
for(ele of input) {
    if(ele === 0) {
        break
    } else {
        if(ele %  2 === 0) {
            arr.push(ele)
        }
    }
}

let l = arr.length
let sum = l === 0 ? 0 : arr.reduce((a, c) => a + c)

console.log(arr.length, sum)