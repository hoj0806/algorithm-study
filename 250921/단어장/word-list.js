const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const words = input.slice(1, n + 1);

// Please Write your code here.

let dic = new Map()

for(let i = 0; i < words.length; i++) {
    let w = words[i]
    if(dic.has(w)) {
        dic.set(w, dic.get(w) + 1)
    } else {
        dic.set(w, 1)
    }
}

let arr = []

for(let [key, value] of dic) {
    arr.push([key, value])
}

let sortArr = arr.sort((a, b) => {
    let [keyA, valueA] = a
    let [keyB, valueB] = b
    if(keyA > keyB) return 1
    else if(keyA < keyB) return -1
    else return 0
})

sortArr.forEach(i => console.log(`${i[0]} ${i[1]}`))