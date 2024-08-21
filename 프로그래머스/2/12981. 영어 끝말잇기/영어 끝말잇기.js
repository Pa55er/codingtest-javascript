function solution(n, words) {
    var answer = [];
    let store = [];
    let target = 0, count = 0, bef = words[0];
    store.push(words[0]);
    for(let i = 1; i < words.length; i++) {
        if(bef[bef.length - 1] != words[i][0] || store.includes(words[i])) {
            target = i % n + 1;
            count = Math.floor(i / n) + 1;
            break;
        }
        bef = words[i];
        store.push(bef);
    }
    answer.push(target);
    answer.push(count);
    return answer;
}