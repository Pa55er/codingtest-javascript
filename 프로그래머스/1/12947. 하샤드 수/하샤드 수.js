function solution(x) {
    let target = x.toString();
    let sum = 0;
    for(let i = 0; i < target.length; i++) {
        sum += Number(target[i]);
    }
    return x % sum === 0;
}