function solution(n,a,b) {
    var answer = 0;
    a--;
    b--;
    while(a != b) {
        answer++;
        a = Math.floor(a / 2);
        b = Math.floor(b / 2);
    }
    return answer;
}