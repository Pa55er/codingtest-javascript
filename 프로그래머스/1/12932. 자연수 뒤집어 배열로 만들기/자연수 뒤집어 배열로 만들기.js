function solution(n) {
    const answer = [];
    while(n !== 0) {
        answer.push(n % 10);
        n -= n % 10;
        n /= 10;
    }
    return answer;
}