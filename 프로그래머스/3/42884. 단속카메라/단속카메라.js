function solution(routes) {
    var answer = 0
    let target = -50000;
    routes.sort((a, b) => a[1] - b[1]);
    for(let i = 0; i < routes.length; i++) {
        if(target < routes[i][0]) {
            target = routes[i][1];
            answer++;
        }
    }
    return answer;
}