function solution(files) {
    files = files.map((a) => {
        let a1 = "", a2 = "", a3 = "";
        for(let i = 0; i < a.length; i++) {
            if(a2 != "" && (a[i] < '0' || a[i] > '9')) {
                a3 = a.substr(i);
                break;
            }
            if(a[i] < '0' || a[i] > '9') a1 = a1 + a[i];
            else a2 = a2 + a[i];
        }
        return [a1, a2, a3];
    });
    files.sort((a, b) => {
        if(a[0].toLowerCase() < b[0].toLowerCase()) return -1;
        else if(a[0].toLowerCase() > b[0].toLowerCase()) return 1;
        else return Number(a[1]) - Number(b[1]);
    });
    const answer = files.map((a) => a[0] + a[1] + a[2]);
    return answer;
}