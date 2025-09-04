const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')


let [a, b] = input[0].split(" ").map(Number)
let arr1 = input[1].split(" ").map(Number)
let arr2 = input[2].split(" ").map(Number)
let allMatched = true

for(let i = 0; i < a - b + 1; i++) {
    allMatched = true
    for(let j = 0; j < b; j++) {
        if(arr1[i+j] !== arr2[j]) {
            allMatched = false
            break
        }
    }

    if(allMatched) {
        break
    }
}

if(arr1.length > arr2.length) {
    console.log("No")
} else {
console.log(allMatched === true ? "Yes" : "No")

}