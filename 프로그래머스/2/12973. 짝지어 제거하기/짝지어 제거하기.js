function solution(s)
{
    var answer = 0;
    let target = [];
    for(let i = 0; i < s.length; i++) {
        if(target.length == 0) target.push(s[i]);
        else if(target[target.length - 1] == s[i]) target.pop();
        else target.push(s[i]);
    }
    if(target.length == 0) answer = 1;
    return answer;
}