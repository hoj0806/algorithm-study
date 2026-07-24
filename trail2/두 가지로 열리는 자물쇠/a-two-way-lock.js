const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

// Please Write your code here.


function unLock(target, select) {
    // target = 조합 , select = 현재 선택한 좌물쇠 번호
    let diff = Math.abs(target - select)
    if (diff <= 2 || diff >= n - 2) return true
    return false
}

let cnt = 0
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
            if (
                (unLock(a, i) && unLock(b, j) && unLock(c, k)) ||
                (unLock(a2, i) && unLock(b2, j) && unLock(c2, k))
            ) {
                cnt++
            }
        }
    }
}

console.log(cnt)