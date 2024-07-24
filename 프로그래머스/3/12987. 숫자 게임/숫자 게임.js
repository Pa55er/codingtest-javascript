function solution(A, B) {
    var answer = 0;
    A = A.sort((a,b) => a - b);
    B = B.sort((a,b) => a - b);
    let index = 0;
    for(let i = 0; i < A.length; i++) {
        if(A[i] < B[index]) {
            answer++;
            index++;
        }
        else {
            index++;
            if(index > B.length - 1) break;
            i--;
        }
    }
    return answer;
}