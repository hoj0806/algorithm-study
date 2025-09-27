const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number).sort((a, b) => a -b)
const queries = input.slice(2, 2 + M).map(Number);

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

for(let i = 0; i < queries.length; i++) {
    console.log(upper_bound(numbers, queries[i]) - lower_bound(numbers, queries[i]))
}