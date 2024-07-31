function solution(enroll, referral, seller, amount) {
    const dfs = (target, money) => {
        if(target == "-") return;
        else if(money == 0) return;
        sales[target] += money - Math.floor(money / 10);
        dfs(ref[target], Math.floor(money / 10));
    }
    
    var answer = new Array(enroll.length).fill(0);
    const ref = new Map();
    const sales = new Map();
    for(let i = 0; i < enroll.length; i++) {
        ref[enroll[i]] = referral[i];
        sales[enroll[i]] = 0;
    }
    for(let i = 0; i < seller.length; i++) {
        dfs(seller[i], amount[i] * 100);
    }
    for(let i = 0; i < enroll.length; i++) {
        answer[i] = sales[enroll[i]];
    }
    return answer;
}