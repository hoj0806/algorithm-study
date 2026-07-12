const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [word, kStr] = input[0].split(" ");
const k = Number(kStr);
const len = word.length
// Please Write your code here.

let arr = Array(200).fill(0)
let j = 0
let max = -1
let distinctCount = 0

for (let i = 0; i < len; i++) {
    while (j < len) {
        let code = word[j].charCodeAt(0)

        if (arr[code] === 0 && distinctCount === k) break

        if (arr[code] === 0) distinctCount++
        arr[code] += 1
        j++
    }

    max = Math.max(max, j - i)
    let code2 = word[i].charCodeAt(0)
    arr[code2] -= 1
    if (arr[code2] === 0) distinctCount--
}

console.log(max)