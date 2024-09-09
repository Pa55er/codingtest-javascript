function solution(prices) {
    var answer = [];
    for(let i = 0; i < prices.length; i++) {
        let target = 0;
        for(let j = i + 1; j < prices.length; j++) {
            target++;
            if(prices[j] < prices[i]) break;
        }
        answer.push(target);
    }
    return answer;
}