function solution(survey, choices) {
    const types = { "R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0 };
    const m = new Map(Object.entries(types));
    let answer = '';

    for(let i = 0; i < survey.length; i++) {
        const score = 4 - choices[i];
        if(score > 0) {
            m.set(survey[i][0], m.get(survey[i][0]) + score);
        } else {
            m.set(survey[i][1], m.get(survey[i][1]) + Math.abs(-score));
        }
    }

    if(m.get("R") >= m.get("T")) answer += "R";
    else answer += "T";
    if(m.get("C") >= m.get("F")) answer += "C";
    else answer += "F";
    if(m.get("J") >= m.get("M")) answer += "J";
    else answer += "M";
    if(m.get("A") >= m.get("N")) answer += "A";
    else answer += "N";

    return answer;
}
