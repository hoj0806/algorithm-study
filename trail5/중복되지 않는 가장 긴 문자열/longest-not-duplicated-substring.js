const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const word = input[0].trim();
const n = word.length;

// Please Write your code here.


let arr = Array(200).fill(0)

let j = 0
let max = -1
for (let i = 0; i < n; i++) {
    while (j < n) {
        let code = word[j].charCodeAt(0)
        if (arr[code] + 1 >= 2) break
        arr[code] += 1
        j++
    }
    max = Math.max(max, j - i)
    let code2 = word[i].charCodeAt(0)
    arr[code2] -= 1
}

console.log(max)
