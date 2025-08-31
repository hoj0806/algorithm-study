const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split("\n")

let count = Number(input[0])

let arr = input[1].split(" ").map(Number)

for(let i = 0; i < count; i++) {
    if(arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}