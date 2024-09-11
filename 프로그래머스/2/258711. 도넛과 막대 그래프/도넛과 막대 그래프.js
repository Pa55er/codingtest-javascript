function solution(edges) {
    const makeMap = () => {
        const map = new Map();
        for(let i = 0; i < edges.length; i++) {
            if(!map.has(edges[i][0])) {
                map.set(edges[i][0], [1, 0]);
            } else {
                const prev = map.get(edges[i][0]);
                map.set(edges[i][0], [prev[0] + 1, prev[1]]);
            }
            if(!map.has(edges[i][1])) {
                map.set(edges[i][1], [0, 1]);
            } else {
                const prev = map.get(edges[i][1]);
                map.set(edges[i][1], [prev[0], prev[1] + 1]);
            }
        }
        return map;
    }

    const answer = [0, 0, 0, 0];
    const map = makeMap();

    for(const [key, value] of map) {
        const [getOut, getIn] = value;
        if(getOut >= 2 && getIn === 0) {
            answer[0] = key;
            answer[1] = getOut;
        }
        else if(getOut === 0) answer[2]++;
        else if(getOut >= 2 && getIn >= 2) answer[3]++;
    }
    answer[1] -= (answer[2] + answer[3]);

    return answer;
}