const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const u = input[1].split(' ').map(Number);
const d = input[2].split(' ').map(Number);

// Please write your code here.


// 1초 지날때마다 윗쪽 숫자의 맨마지막 숫자가 밑쪽 숫자의 맨처음으로 들어감

// 그리고 밑쪽 숫자의 맨 마지막 숫자가 윗쪽 숫자의 첫번째로 들어감



for (let i = 1; i <= t; i++) {
    let upLast = u[n - 1]
    let downLast = d[n - 1]
    for (j = n - 1; j >= 1; j--) {
        u[j] = u[j - 1]
    }

     for (k = n - 1; k >= 1; k--) {
        d[k] = d[k - 1]
    }

    u[0] = downLast
    d[0] = upLast

}


console.log(u.join(" "))
console.log(d.join(" "))
