function solution(cacheSize, cities) {
    var answer = 0;
    for(let i = 0; i < cities.length; i++) {
        cities[i] = cities[i].toLowerCase();
    }
    const arr = [];
    for(let i = 0; i < cities.length; i++) {
        let flag = 1;
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] == cities[i]) {
                let target = cities[i];
                arr.splice(j,1);
                arr.unshift(target);
                flag = 0;
                answer++;
                break;
            }
        }
        if(cacheSize == 0) answer += 5;
        else if(flag) {
            if(arr.length == cacheSize) {
                arr.pop();
            }
            arr.unshift(cities[i]);
            answer += 5;
        }
    }
    return answer;
}