const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let arr = f[1].split(" ").map(Number)


let sum = 0
let cnt = 0

for (let ele of arr) {
    sum += ele
    cnt++
}

let average = (sum / cnt).toFixed(1)


console.log(average)
if(average >= 4.0) {
    console.log("Perfect")
} else if(average >= 3.0) {
    console.log("Good")
} else {
    console.log("Poor")
}