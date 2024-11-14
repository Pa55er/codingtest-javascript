function solution(queue1, queue2) {
    let answer = 0;
    let total_1 = 0;
    let total_2 = 0;
    let start_1 = 0;
    let start_2 = 0;
    let len = queue1.length * 2;
    for(let i = 0; i < queue1.length; i++) {
        total_1 += queue1[i];
    }
    for(let i = 0; i < queue2.length; i++) {
        total_2 += queue2[i];
    }
    while(total_1 !== total_2) {
        if(total_1 > total_2) {
            queue2.push(queue1[start_1]);
            total_1 -= queue1[start_1];
            total_2 += queue1[start_1++];
        } else {
            queue1.push(queue2[start_2]);
            total_2 -= queue2[start_2];
            total_1 += queue2[start_2++];
        }
        answer++;
        if(start_1 >= len || start_2 >= len) {
            answer = -1;
            break;
        }
    }
    return answer;
}