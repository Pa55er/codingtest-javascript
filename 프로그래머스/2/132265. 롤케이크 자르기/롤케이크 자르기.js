function solution(topping) {
    var answer = 0;
    const a = new Map();
    const b = new Map();
    for(let i = 0; i < topping.length; i++) {
        b.set(topping[i], (b.get(topping[i]) || 0) + 1);
    }
    for(let i = 0; i < topping.length; i++) {
        a.set(topping[i], (a.get(topping[i]) || 0) + 1);
        b.set(topping[i], b.get(topping[i]) - 1);
        if(b.get(topping[i]) == 0) b.delete(topping[i]);
        if(a.size == b.size) answer++;
    }
    return answer;
}