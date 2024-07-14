function solution(n, k) {
    var answer = 0;
    const arr = n.toString(k).split("0");
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != "") {
            let flag = 0;
            let target = Number(arr[i]);
            for(let j = 2; j <= Math.sqrt(target); j++){
                if(target % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if(arr[i] != "1" && flag == 0) answer++;
        }
    }
    return answer;
}