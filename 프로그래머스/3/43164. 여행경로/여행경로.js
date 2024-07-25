function solution(tickets) {
    const dfs = (str, count) => {
        if(count == tickets.length) {
            answer = result;
            return;
        }
        for(let i = 0; i < tickets.length; i++) {
            if(visited[i] == false && tickets[i][0] == str) {
                visited[i] = true;
                result.push(str);
                if(count == len - 1) result.push(tickets[i][1]);
                dfs(tickets[i][1], count + 1);
                if(answer != false) break;
                result.pop();
                visited[i] = false;
            }
        }
    }
    var answer = false;
    let result = [];
    let visited = new Array(tickets.length).fill(false);
    let len = tickets.length;
    let flag = 0;
    tickets.sort();
    dfs("ICN", 0);
    return answer;
}