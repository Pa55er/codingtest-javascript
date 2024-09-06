function solution(s) {
    let answer = 0;
    const target = [];
    for(let i = 0; i < s.length; i++) {
        if(target[target.length - 1] === s[i]) target.pop();
        else target.push(s[i]);
    }
    if(target.length === 0) answer = 1;
    return answer;
}