const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const points = input[1].split(' ').map(Number);
const queries = input.slice(2).map(line => line.split(' ').map(Number));

// Please Write your code here.






function upper_bound(arr, target) {
    let left = 0
    let right = arr.length - 1
    let min_idx = arr.length

    while (left <= right) {
        let mid = parseInt((left + right) / 2)
        if (arr[mid] > target) {
            right = mid - 1
            min_idx = Math.min(min_idx, mid)
        } else {
            left = mid + 1
        }
    }

    return min_idx
}

function lower_bound(arr, target) {
    let left = 0
    let right = arr.length - 1
    let min_idx = arr.length

    while (left <= right) {
        let mid = parseInt((left + right) / 2)
        if (arr[mid] >= target) {
            right = mid - 1
            min_idx = Math.min(min_idx, mid)
        } else {
            left = mid + 1
        }
    }

    return min_idx
}
points.sort((a, b) => a - b);
let results = [];

for (let i = 0; i < m; i++) {
    let [start, end] = queries[i];
    
    // end보다 큰 값이 처음 나오는 위치
    let u = upper_bound(points, end);
    // start 이상인 값이 처음 나오는 위치
    let l = lower_bound(points, start);
    
    results.push(u - l);
}

console.log(results.join('\n'));