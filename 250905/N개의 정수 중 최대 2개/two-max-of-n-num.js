const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let r = input[1].split(" ").map(Number)
let arr = []

let maxValue = Number.MIN_SAFE_INTEGER;
let nextMaxValue = Number.MIN_SAFE_INTEGER;
for(let i = 0; i < r.length; i++) {
    if(r[i] > maxValue) {
        maxValue = r[i]
        for(let j = i + 1; j < r.length; j++) {
            if(r[j] > maxValue) {
                maxValue = r[j]
                i = j - 1
            } else if(r[j] === maxValue) {
                nextMaxValue = r[j]
            } else {
                if(r[j] > nextMaxValue) {
                    nextMaxValue = r[j]
                }
            }
        }
    }
   
}


console.log(maxValue, nextMaxValue)