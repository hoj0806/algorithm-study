const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const abilities = input[0].split(" ").map(Number);

// Please Write your code here.
let n = abilities.length

let sum = abilities.reduce((a, c) => a + c, 0)

let min = Infinity

for (let i = 0; i < n; i++) {
    let solo = abilities[i]
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            if (i !== j && j !== k && i !== k) {
                let team1 = abilities[j] + abilities[k]
                let team2 = sum - team1 - solo
                let arr = [solo, team1, team2]
                let set = new Set(arr)
                if (set.size === 3) {
                    min = Math.min(min, (Math.max(...arr) - Math.min(...arr)))
                }
            }
        }
    }
}


console.log(min === Infinity ? -1 : min)