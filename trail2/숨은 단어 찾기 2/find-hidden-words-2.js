const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, n + 1);
// Please Write your code here.


let cnt = 0

let dx = [0, 1, 1, 1, 0, -1, -1, -1]
let dy = [1, 1, 0, -1, -1, -1, 0, 1]


function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m
}

for (let i = 0; i < n; i++) {

    for (let j = 0; j < m; j++) {
        let str = ''
        let spell = arr[i][j]
        str += spell
        for (let k = 0; k < dx.length; k++) {
            let nx = i
            let ny = j
            for (let p = 1; p <= 2; p++) {
                if (isRange(nx + dx[k], ny + dy[k])) {
                    nx += dx[k]
                    ny += dy[k]
                    str += arr[nx][ny]
                }
            }
            if (str === 'LEE') cnt++
            str = spell
        }

    }

}


console.log(cnt)