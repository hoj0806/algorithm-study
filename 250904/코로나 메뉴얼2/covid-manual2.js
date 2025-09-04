const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let arr = Array(4).fill(0)

for(let i = 0; i < input.length; i++) {
    let [d, t] = input[i].split(" ")
    let tem = Number(t)
    if(d === 'Y') {
        if(tem >= 37) {
            arr[0]+=1
        } else {
            arr[2]+=1
        }
    } else {
        if(tem >= 37) {
            arr[1]+=1
        } else {
            arr[3]+=1
        }
    }
}

if(arr[0] >= 2) {
    arr.push('E')
}

console.log(arr.join(" "))