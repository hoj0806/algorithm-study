const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input.slice(0, 19).map(row => row.split(' '));

// Please Write your code here.


let dx = [0, 1, 1, 1, 0, -1, -1, -1]
let dy = [1, 1, 0, -1, -1, -1, 0, 1]

function isRange(x, y) {
    return 0 <= x && x < 19 && 0 <= y && y < 19
}

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        let str = arr[i][j]
        for (let k = 0; k < dx.length; k++) {
            let nx = i
            let ny = j
            for (let p = 1; p <= 4; p++) {
                if (isRange(nx + dx[k], ny + dy[k])) {
                    nx += dx[k]
                    ny += dy[k]
                    str += arr[nx][ny]
                }
            }
            if (str === "11111" || str === "22222") {
                console.log(str[0])
                console.log((i + dx[k] * 2) + 1, (j + dy[k] * 2) + 1);
                return
            }
            str = arr[i][j]
        }

    }
}

console.log(0)