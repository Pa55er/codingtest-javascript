function solution(str1, str2) {
    var answer;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const a = str1.length - 1;
    const b = str2.length - 1;
    const arr = [];
    for(let i = 0; i < a; i++) {
        if(str1[i] >= 'a' && str1[i] <= 'z' && str1[i + 1] >= 'a' && str1[i + 1] <= 'z') {
            arr.push(str1[i] + str1[i + 1]);
        }
    }
    let its = 0, uni = arr.length;
    for(let i = 0; i < b; i++) {
        if(str2[i] >= 'a' && str2[i] <= 'z' && str2[i + 1] >= 'a' && str2[i + 1] <= 'z') {
            if(arr.includes(str2[i] + str2[i + 1])) {
                its++;
                arr.splice(arr.indexOf(str2[i] + str2[i + 1]), 1);
            }
            else {
                uni++;
            }
        }
    }
    if(uni == 0) answer = 65536;
    else answer = Math.floor(its / uni * 65536);
    return answer;
}