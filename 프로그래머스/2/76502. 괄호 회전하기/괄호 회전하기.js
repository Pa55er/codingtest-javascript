function solution(s) {
    var answer = 0;
    s = s.concat(s); 
    for(let i = 0; i < s.length / 2; i++) {
        let arr = [];
        for(let j = 0; j < s.length / 2; j++) {
            if(arr.length == 0) arr.push(s[i + j]);
            else {
                if(s[i + j] == ']' && arr[arr.length - 1] == '[') arr.pop();
                else if(s[i + j] == ')' && arr[arr.length - 1] == '(') arr.pop();
                else if(s[i + j] == '}' && arr[arr.length - 1] == '{') arr.pop();
                else arr.push(s[i + j]);
            }
        }
        if(arr.length == 0) answer++;
    }
    return answer;
}