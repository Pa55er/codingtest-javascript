function solution(s) {
    var answer = [];
    let a = 0, b = 0;
    while(s != "1") {
        a++;
        let target = 0;
        for(let i = 0; i < s.length; i++) {
            if(s[i] == '0') {
                b++;
            }
            else target++;
        }
        s = "";
        let i = 1;
        while(i <= target){
            if(i & target) s = "1" + s;
            else s = "0" + s;
            i *= 2;
        }
    }
    answer.push(a);
    answer.push(b);
    return answer;
}