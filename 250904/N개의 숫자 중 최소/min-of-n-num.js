const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')


let arr = input[1].split(" ").map(Number)

let minValue = arr[0]
let cnt = 0

for(let i = 0; i < arr.length; i++) {
    if(arr[i] < minValue) {
        minValue = arr[i]
    }
}

for(let j = 0; j < arr.length; j++) {
    if(minValue === arr[j]) {
        cnt+=1
    }
}

console.log(minValue, cnt)