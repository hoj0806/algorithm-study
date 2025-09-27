const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const queries = input[2].split(' ').map(Number);

// Please Write your code here.
function binary_search(arr,target) {
    let left = 0
    let right = arr.length - 1

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)

        if(arr[mid] === target) {
            return mid
        } else {
            if(arr[mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }

    return -1
}
function lower_bound(arr, target) {
    let left = 0
    let right = arr.length

    while(left < right) {
        let mid = Math.floor((left + right) / 2)

        if(arr[mid] >= target) {
            right = mid
        } else if(arr[mid] < target) {
            left = mid + 1
        }
    }

    return left + 1
}

for(let i = 0; i < queries.length; i++) {
    if(binary_search(arr, queries[i]) === -1) {
        console.log(-1)
    } else {
        console.log(lower_bound(arr, queries[i]))
    }
}