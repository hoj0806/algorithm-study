const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let arr = Array(9).fill(0)


for(let i = 0; i < input.length; i++) {
    let l = input[i]
    if(l === 0) {
        break
    } else {
        if(l >= 10) {
            let idx = parseInt(l / 10)
            arr[idx - 1]+=1
        }
    }
}


for(let j = 0; j < arr.length; j++) {
    console.log(`${j + 1} - ${arr[j]}`)
}