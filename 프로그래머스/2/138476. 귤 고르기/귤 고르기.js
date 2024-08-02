function solution(k, tangerine) {
    var answer = 0;
    const obj = {};
    tangerine.forEach((element) => obj[element] = (obj[element] || 0) + 1);
    const arr = Object.values(obj).sort((a,b) => b - a);
    for(let i = 0; i < arr.length; i++) {
        answer++;
        if(arr[i] >= k) break;
        k -= arr[i];
    }
    return answer;
}
