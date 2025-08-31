const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let arr = []

for(let i = 0; i < 9; i++) {
    if(i === 0 || i === 1) {
        arr.push(Number(input[i]))
    } else {
        arr.push((arr[i-1]+arr[i-2] % 10))
    }
}

console.log(arr.join(" "))