const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let arr = ["L", 'E', 'B', 'R', 'O', 'S']

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === f) {
        console.log(i)
        return
    }
}

console.log("None")