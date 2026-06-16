const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' ').map(Number));

let max = 0;

for (let i = 0; i < 3; i++) {
    let arr = [0, 0, 0];
    let score = 0;
    arr[i] = 1; 
    
    for (let j = 0; j < n; j++) {
        let [a, b, c] = commands[j];
        [arr[a - 1], arr[b - 1]] = [arr[b - 1], arr[a - 1]];
        
        if (arr[c - 1] === 1) score++;
    }

    max = Math.max(max, score);
}

console.log(max);