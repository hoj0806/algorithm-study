const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(" ").map(Number);

// Please Write your code here.


let answer = 0


for (let i = x; i <= y; i++) {
    let str = String(i)
    let counts = {}; 
    for (let j = 0; j < str.length; j++) {
        counts[str[j]] = (counts[str[j]] || 0) + 1;
    }

    const values = Object.values(counts); // 등장 횟수들만 모은 배열 [4, 1]

    if (values.length === 2 && (values[0] === 1 || values[1] === 1)) {
        answer++;
    }
}

console.log(answer)