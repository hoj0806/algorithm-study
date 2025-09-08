const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

// Please Write your code here.

class Weather {
    constructor(date, day, wea) {
        this.date = date
        this.day = day
        this.wea = wea
    }
}

let arr = []

for(let i = 0; i < forecasts.length; i++) {
    let [a, b, c] = forecasts[i]
    if(c === 'Rain') {
        arr.push(new Weather(a, b, c))
    }
}


let idx = 0
for(let i = 0; i < arr.length; i++) {
    let da = arr[i].date
    let [year, month, day] = da.split("-")
    if(new Date(da) < new Date(arr[idx].date)) {
        idx = i
    }
}

console.log(arr[idx].date, arr[idx].day, arr[idx].wea)