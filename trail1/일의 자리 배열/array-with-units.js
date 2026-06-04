const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(' ').map(Number)


let [a, b] = f


let arr = Array(10)

arr[0] = a
arr[1] = b


for(let i = 2; i < 10; i++) {
    arr[i] = (arr[i-1] + arr[i-2]) % 10
}

console.log(arr.join(" "))
