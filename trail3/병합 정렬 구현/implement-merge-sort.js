const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.


function merge(left, right) {
    let result = []
    let i = 0
    let j = 0
    let leftLen = left.length
    let rightLen = right.length

    while (i < leftLen && j < rightLen) {
        if (left[i] > right[j]) {
            result.push(right[j])
            j++
        } else {
            result.push(left[i])
            i++
        }
    }


    return [...result, ...left.slice(i), ...right.slice(j)]
}
function merge_sort(arr) {
    if (arr.length === 1) {
        return arr
    }


    let len = arr.length
    let mid = parseInt(len / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(merge_sort(left), merge_sort(right))
}

console.log(merge_sort(arr).join(" "))