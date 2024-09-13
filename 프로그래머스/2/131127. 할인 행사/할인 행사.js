function solution(want, number, discount) {
    var answer = 0;
    for(let i = 0; i <= discount.length - 10; i++) {
        const m = new Map();
        for(let i = 0; i < want.length; i++) {
            m[want[i]] = number[i];
        }
        let flag = 0;
        for(let j = 0; j < 10; j++) {
            let a = discount[i + j];
            if(m[a]) {
                m[discount[i + j]]--;
                if(m[discount[i + j]] == 0) m.delete(discount[i + j]);
            }
            else {
                flag = 1;
                break;
            }
        }
        if(flag == 0) answer++;
    }
    return answer;
}