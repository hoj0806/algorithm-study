const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
// Please Write your code here.


// 1부터 max값까지 mid 값을 구해서 해당값이 3이나 5로 나누어지는값중 최소값 구하기

function check(num) {
    return (num) - (parseInt(num / 3) + parseInt(num / 5) - parseInt(num / 15))
}

function solution() {
    let left = 1
    let right = 2000000000
    let min = Infinity
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        let z = check(mid)
        if (z >= n) {
            min = Math.min(min, mid)
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return min
}


console.log(solution(n))