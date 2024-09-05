function solution(N, stages) {
    stages.sort((a, b) => a - b);
    const arr = [];
    for (let i = 1; i <= N; i++) {
        arr.push([i, 0]);
    }
    let target = stages[0];
    let index = 0;
    for (let i = 1; i < stages.length; i++) {
        if (target !== stages[i]) {
            arr[target - 1][1] = (i - index) / (stages.length - index);
            target = stages[i];
            index = i;
        }
        if (stages[i] === N + 1) break;
        if (i === stages.length - 1) arr[target - 1][1] = 1;
    }
    arr.sort((a, b) => b[1] - a[1]);
    return arr.map((ele) => ele[0]);
}