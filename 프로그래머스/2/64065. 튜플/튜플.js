function solution(s) {
    const se = new Set();
    s = JSON.parse(s.replace("{{", "[[").replace("}}","]]").replaceAll("},{", "],[")).sort((a, b) => a.length - b.length);
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < s[i].length; j++) {
            se.add(Number(s[i][j]));
        }
    }
    return Array.from(se);
}
