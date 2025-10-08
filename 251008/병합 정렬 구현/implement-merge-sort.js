const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

function merge_sort(arr) {
    if(arr.length === 1) return arr

    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

    return merge(merge_sort(left), merge_sort(right))
}

function merge(left, right) {
    let result = []
    let i = 0
    let j = 0

    while(i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)]
}

console.log(merge_sort(arr).join(" "))