const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const queries = input.slice(2, 2 + M).map(Number);

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

    return min_idx
}

function upper_bound(arr, target) {
    let left = 0
    let right = arr.length - 1
    let min_idx = arr.length

    while (left <= right) {
        let mid = (left + right) >> 1
        if (arr[mid] > target) {
            min_idx = Math.min(min_idx, mid)
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return min_idx
}


for (let i = 0; i < M; i++) {
    let q = queries[i]
    let rightIdx = upper_bound(numbers, q)
    let leftIdx = lower_bound(numbers, q)
    console.log(rightIdx - leftIdx)
}