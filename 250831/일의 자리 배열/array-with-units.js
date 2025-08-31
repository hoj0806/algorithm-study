const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let arr = []

for(let i = 0; i <= 9; i++) {
    if(i === 0 || i === 1) {
        arr.push(Number(input[i]))
    } else {
        let sum = arr[i-1] + arr[i-2]
        arr.push(sum % 10)
    }
}

console.log(arr.join(" "))