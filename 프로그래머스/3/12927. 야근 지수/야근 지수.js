function solution(n, works) {
    if(works.reduce((a,b) => a + b, 0) <= n) return 0;
    works = works.sort((a, b) => a - b);
    let answer = 0;
    let lastIndex = works.length - 1;
    while(n) {
        let target = works[lastIndex];
        for(let i = lastIndex; i >= 0; i--) {
            if(works[i] == target) {
                n--;
                works[i]--;
                if(!n) break;
            }
            else break;
        }
    }
    answer = works.reduce((a,b) => a + b * b, 0);
    return answer;
}