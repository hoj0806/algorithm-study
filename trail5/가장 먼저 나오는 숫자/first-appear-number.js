const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const queries = input[2].split(' ').map(Number);

// Please Write your code here.

function lower_bound(arr, target) {
    let left = 0
    let right = arr.length - 1
    let min_idx = arr.length

    while (left <= right) {
        let mid = (left + right) >> 1
        if (arr[mid] >= target) {
            min_idx = Math.min(min_idx, mid)
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    if(arr[min_idx] === target) return min_idx + 1
    else return -1
}

for (let i = 0; i < M; i++) {
    let q = queries[i]
    let idx = lower_bound(arr, q)
    console.log(idx)
}