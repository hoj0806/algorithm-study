const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let arr = input.map(Number)

let three = 0
let five = 0

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 3 === 0) {
        three+=1
    }
    if(arr[i] % 5 === 0) {
        five+=1
    }
}

console.log(three, five)