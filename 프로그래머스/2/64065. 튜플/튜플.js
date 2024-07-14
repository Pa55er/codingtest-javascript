function solution(s) {
    var answer = [];
    s = s.replace("{{", "").replace("}}","").split("},{").map((a) => a.split(","));
    s.sort((a, b) => a.length - b.length);
    answer.push(s[0][0]);
    for(let i = 1; i < s.length; i++) {
        for(let j = 0; j < s[i].length; j++) {
            if(!answer.includes(s[i][j])) {
                answer.push(s[i][j]);
                break;
            }
        }
    }
    answer = answer.map((a) => Number(a));
    return answer;
}