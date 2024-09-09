function solution(prices) {
    const answer = new Array(prices.length);
    const stack = [];
    for(let i = 0; i < prices.length; i++) {
        while(stack.length && stack[stack.length - 1][1] > prices[i]) {
            const target = stack.pop();
            answer[target[0]] = i - target[0];
        }
        stack.push([i, prices[i]]);
    }
    while(stack.length) {
        const target = stack.pop();
        answer[target[0]] = prices.length - target[0] - 1;
    }
    return answer;
}