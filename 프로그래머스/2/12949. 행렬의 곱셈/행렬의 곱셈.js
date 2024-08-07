function solution(arr1, arr2) {
    return arr1.map((row) => {
        return arr2[0].map((col, j) => {
            return row.reduce((sum, current, i) => sum + current * arr2[i][j], 0);
        });
    });
}