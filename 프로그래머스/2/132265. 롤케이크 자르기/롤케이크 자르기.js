function solution(topping) {
    var answer = 0;
    const a = new Map();
    const b = new Map();
    for(let i = 0; i < topping.length; i++) {
        if(b.has(topping[i])) b.set(topping[i], b.get(topping[i]) + 1);
        else b.set(topping[i], 1);
    }
    for(let i = 0; i < topping.length; i++) {
        if(a.has(topping[i])) a.set(topping[i], a.get(topping[i]) + 1);
        else a.set(topping[i], 1);
        b.set(topping[i], b.get(topping[i]) - 1);
        if(b.get(topping[i]) == 0) b.delete(topping[i]);
        if(a.size == b.size) answer++;
    }
    return answer;
}