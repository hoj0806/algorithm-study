const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const points = input[1].split(' ').map(Number);
const queries = input.slice(2).map(line => line.split(' ').map(Number));

// Please Write your code here.

function lower_bound(arr, target) {
    let left = 0
    let right = arr.length
    
    while(left < right) {
        let mid = Math.floor((left + right) / 2)

        if(arr[mid] >= target) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}

function upper_bound(arr, target) {
    let left = 0
    let right = arr.length
    
    while(left < right) {
        let mid = Math.floor((left + right) / 2)

        if(arr[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}

let answer = []
for(let i = 0; i < queries.length; i++) {
    let arr = []
    let [start, end] = queries[i]
    for(let j = start; j <= end; j++) {
        arr.push(j)
    }
    let count = 0
    for(let z = 0; z < points.length; z++) {
        let ub = upper_bound(arr, points[z])
        let lb = lower_bound(arr, points[z])
        count += ub - lb
    }
    answer.push(count)
}

console.log(answer.join('\n'))