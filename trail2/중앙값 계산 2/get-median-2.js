const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.


let result = []
let z = ''
for (let i = 0; i < arr.length; i++) {

    result.push(arr[i])
    if (i % 2 === 0) {
        let sortArr = result.sort((a, b) => a - b)
        let middle = sortArr[parseInt((i + 1) / 2)]
        z += middle + " "
    }


}

console.log(z)