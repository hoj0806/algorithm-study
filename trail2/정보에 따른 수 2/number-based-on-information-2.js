const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [t, a, b] = input[0].split(' ').map(Number);
const snData = input.slice(1, 1 + t).map(line => line.split(' '));
// Please Write your code here.


let cnt = 0

for (let i = a; i <= b; i++) {
    let minS = 10000
    let minN = 10000

    for (let j = 0; j < snData.length; j++) {
        let [a, b] = snData[j]
        b = Number(b)
        if (a === 'S') {
            minS = Math.min(minS, Math.abs(i - b))
        } else {
            minN = Math.min(minN, Math.abs(i - b))
        }

    }
    if (minS <= minN) cnt++
}

console.log(cnt)