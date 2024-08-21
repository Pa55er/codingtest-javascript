function solution(n, words) {
    var answer = [];
    let s = new Set();
    let target = 0, count = 0, bef = words[0];
    s.add(words[0]);
    for(let i = 1; i < words.length; i++) {
        if(bef[bef.length - 1] != words[i][0] || s.has(words[i])) {
            target = i % n + 1;
            count = Math.floor(i / n) + 1;
            break;
        }
        bef = words[i];
        s.add(bef);
    }
    answer.push(target);
    answer.push(count);
    return answer;
}