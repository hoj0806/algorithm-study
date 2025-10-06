const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

// Please Write your code here.


let answer = 0
for(let i = x; i <= y; i++) {
    let arr = String(i).split("")
    if(arr.length % 2 !== 0) {
        arr.splice((arr.length / 2), 1)
    }
    let x = arr.slice(0, arr.length / 2).join("")
    let y = arr.slice(arr.length / 2, arr.length + 1).reverse().join("")
    if(x===y) answer++
}

console.log(answer)