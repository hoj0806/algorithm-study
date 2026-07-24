const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[0].split(" ").map(Number);

// Please Write your code here.

let n = arr.length
let min = Infinity
let sum = arr.reduce((a, c) => a + c, 0)

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            for (let p = 0; p < n; p++) {
                let arr2 = [i, j, k, p]
                if (new Set(arr2).size !== 4) continue
                let team1 = arr[i] + arr[j]
                let team2 = arr[k] + arr[p]
                let team3 = sum - team1 - team2
                min = Math.min(Math.max(team1, team2, team3) - Math.min(team1, team2, team3), min)
            }
        }
    }
}

console.log(min)
