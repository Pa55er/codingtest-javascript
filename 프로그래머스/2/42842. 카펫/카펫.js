function solution(brown, yellow) {
    var answer = [];
    for(let i = 1; i <= Math.sqrt(yellow); i++) {
        if(yellow % i == 0 && brown == (i + 2 + yellow / i) * 2) {
            answer.push(i + 2);
            answer.push(yellow / i + 2);
            break;
        }
    }
    answer.sort((a,b) => b - a);
    return answer;
}