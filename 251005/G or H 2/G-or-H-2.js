const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());

let arr = Array(100).fill(0)

for (let i = 0; i < n; i++) {
    const [posStr, letter] = input[i].split(' ');
    const pos = Number(posStr);
    arr[posStr] = letter
}

let answer = 0

for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j <= arr.length; j++) {
        let s = arr.slice(i, j)
        let first = s[0]
        let last = s[s.length - 1]
        if(first !== 0 && last !== 0) {
            let gCount = s.filter((i) => i === "G").length
            let hCount = s.filter((i) => i === "H").length
            if(s.indexOf(0) === -1 || gCount === hCount) {
                answer = Math.max(answer, Math.abs(i-j-1))
            }
        }
    }
}

console.log(answer)