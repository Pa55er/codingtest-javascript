function solution(n,a,b) {
    var answer = 1;
    a--;
    b--;
    a = Math.floor(a / 2);
    b = Math.floor(b / 2);
    while(a != b) {
        answer++;
        a = Math.floor(a / 2);
        b = Math.floor(b / 2);
    }
    return answer;
}