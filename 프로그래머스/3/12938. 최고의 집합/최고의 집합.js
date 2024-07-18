function solution(n, s) {
    var answer = [];
    let a = Math.floor(s / n);
    let b = s % n;
    if(a == 0) return [-1];
    for(let i = 0; i < n; i++) {
        if(i < n - b) {
            answer.push(a);
        }
        else {
            answer.push(a + 1);
        }
    }
    return answer;
}
