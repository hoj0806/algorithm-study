const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

// Please Write your code here.

// n명의 학생 벌칙을 관리할 배열 만들기

let arr = Array(n).fill(0)

function check(arr, number) {
    return arr.some((i) => i >= number)
}

// 순회하면서 체크
let answer = -1

for (let i = 0; i < penalizedPersons.length; i++) {
    let p = penalizedPersons[i]
    arr[p - 1] += 1
    if (arr[p - 1] >= k) {
        answer = p
        break
    }
}

console.log(answer)