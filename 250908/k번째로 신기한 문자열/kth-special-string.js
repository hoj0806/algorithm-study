const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');


input.shift()


let arr = []

for(let i = 0; i < input.length; i++) {
    let str = input[i]
    if(str.slice(0, 2) === t) {
        arr.push(str)
    }
}

console.log(arr.sort()[k - 1])