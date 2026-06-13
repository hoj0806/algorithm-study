const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.

// 1 ~5까지 2중for문으로 순회 

// 기준이 되는 방보다 큰  방들은 가야하는방 - 기준방 * 인원수

// 기준이 되는 방보다 작은 방들은 총 방 갯수 - (기준방 - 가야하는 방) * 인원수


let min = 1000000000

for (let i = 1; i <= n; i++) {
    let roomNumber = i
    let sum = 0
    for (let j = 0; j < n; j++) {
      
        if (roomNumber < j + 1) {
            sum += ((j + 1) - roomNumber) * arr[j]
        } else if(roomNumber > j + 1) {
            sum += (n - (roomNumber - (j + 1) )) * arr[j]
        }
    }
    min = Math.min(min, sum)
}

console.log(min)