const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);


// Please Write your code here.
function isRange(x, y) {
    return x >= 0 && x < n && y >=0 && y < n
}

let dx = [0, 1, 0, -1]
let dy = [1 ,0, -1, 0]

let arr = Array(n).fill(0).map(() => Array(n).fill(0))

for (let i = 1; i <= m; i++) {
    let cnt = 0
    let [x, y] = input[i].split(" ").map(Number)
    x -=1
    y -=1
    arr[x][y] = 1

    for(let i = 0; i < 4; i++) {
        if(isRange(x + dx[i], y + dy[i]) && arr[x + dx[i]][y + dy[i]] === 1) {
            cnt++
        }
    }
    if(cnt === 3) {
        console.log(1)
    } else {
        console.log(0)
    }
    
}

