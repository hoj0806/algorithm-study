const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let s = input

let idx = -1
let arr = ['L', 'E', 'B', 'R', 'O', 'S']

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === s) {
        idx = i
        break
    }
}


console.log(idx === -1 ? 'None' : idx)