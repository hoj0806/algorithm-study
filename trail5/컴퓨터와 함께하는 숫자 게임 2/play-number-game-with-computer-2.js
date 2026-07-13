const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const m = BigInt(input[0]);
const [a, b] = input[1].split(' ').map(BigInt);

// Please Write your code here.


let min_cnt = Infinity
let max_cnt = -Infinity

function binary_search(r, target) {
    let left = 1n
    let right = BigInt(r)
    let cnt = 0
    while (left <= right) {
        cnt++
        let mid = BigInt((left + right)) >> 1n
        if (mid === target) {
            return cnt
        } else {
            if (mid > target) {
                right = mid - 1n
            } else {
                left = mid + 1n
            }
        }
    }
}

for (let i = a; i <= b; i++) {
    let cnt = binary_search(m, i)
    min_cnt = Math.min(min_cnt, cnt)
    max_cnt = Math.max(max_cnt, cnt)
}

console.log(min_cnt, max_cnt)