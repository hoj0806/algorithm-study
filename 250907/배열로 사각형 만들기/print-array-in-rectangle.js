let matrix = Array(5).fill(0).map(() => Array(5).fill(0))



for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        if(i === 0 || j === 0) {
            matrix[i][j] = 1
        } else {
            matrix[i][j] = matrix[i][j-1] + matrix[i-1][j]
        }
    }
    console.log(matrix[i].join(" "))
}
