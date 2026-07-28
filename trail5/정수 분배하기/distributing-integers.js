const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

// 최소값은 1~ arr에 있는 값중 가장 큰값

// 해당값을 배열에 넣으면서 체크!

// 중앙값 (1 + arr의 최댓값) / 2 를 처음에 넣어줌 하나씩 넣으면서 배열값이 넘지 않을때마다 cnt + 1

// 모든게 끝나고 cnt가 m보다 작은경우 right를 중앙값 -1로 업데이트 

// cnt가 m보다 큰경우 


function solution() {
    let left = 1
    let right = Math.max(...arr)
    let max = 0
    while (left <= right) {
        let mid = parseInt((left + right) / 2)
        let cnt = 0
        let sum = 0

        for (let i = 0; i < n; i++) {
            let num = arr[i]
            cnt += Math.floor(num / mid)
        }

        if (cnt >= m) {
            max = Math.max(max, mid); // 가능한 경우 중 최댓값 갱신
            left = mid + 1;           // 더 큰 크기도 가능한지 시도
        } else {
            right = mid - 1;          // 개수가 부족하므로 크기를 줄임
        }
    }



    return max
}


console.log(solution())

