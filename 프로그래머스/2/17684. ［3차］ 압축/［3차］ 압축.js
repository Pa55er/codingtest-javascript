function solution(msg) {
    var answer = [];
    const arr = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i = 0; i < msg.length; i++) {
        let target = "";
        for(let j = 0; i + j < msg.length; j++){
            target = target + msg[i + j];
            if(!arr.includes(target)) {
                arr.push(target);
                target = target.substr(0, target.length - 1);
                answer.push(arr.indexOf(target));
                i += j - 1;
                break;
            }
            else {
                if(i + j == msg.length - 1) {
                    answer.push(arr.indexOf(target));
                    i += j;
                    break;
                }
            }
        }
    }
    return answer;
}