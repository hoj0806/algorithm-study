const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')


let arr = input[1].split(" ").map(Number)

let minValue = arr[0]

let cnt = 0

for(let i = 0; i < arr.length; i++) {
    if(arr[i] <= minValue) {
        if(minValue === arr[i]) {
            cnt++
        } else {
            cnt = 1
        }
        minValue = arr[i]
    }
   

}


console.log(minValue, cnt)