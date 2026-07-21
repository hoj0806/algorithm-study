const fs = require('fs')
let input = fs.readFileSync(0).toString().split('\n')


let n = Number(input[0])
let arr = input[1].split(" ").map(Number)

let max = -1

let numbers = [...new Set(arr)]

for(let i = 0; i < numbers.length; i++) {
    let cnt = 0
    for(let j = 0; j < n; j++) {
        if(numbers[i] === arr[j]) cnt++

        if(cnt > 1) break
    }

    if(cnt === 1) max = Math.max(max, numbers[i])
}

console.log(max)