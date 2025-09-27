const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const queries = input.slice(2, 2 + m).map(Number);

// Please Write your code here.

function binary_search(arr, target) {
    let left = 0
    let right = arr.length - 1
    while(left <= right) {
        if(arr[mid] === target) return mid

        if(arr[mid] > target) {
            right = mid - 1
        } else if(arr[mid] < target) {
            left = mid + 1
        }
    }

    return -1
}


for(let i = 0; i < queries.length; i++) {
    console.log(binary_search(numbers, queries[i]))
}